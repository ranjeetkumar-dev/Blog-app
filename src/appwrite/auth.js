import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const user = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (user) {
        //redirect to login or create logged in
        await this.login(email, password);
        return user;
      }
    } catch (error) {
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      if (session) return session;
    } catch (error) {
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      const user = await this.account.get();
      if (user) return user;
    } catch (error) {
      throw error;
    }
    return null;
  }
  async logout() {
    try {
      const result = await this.account.deleteSessions();
      if (result) {
        return result;
      }
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
