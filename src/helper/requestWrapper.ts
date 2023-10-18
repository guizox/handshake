import axios from "axios";
interface FetchOptions {
  headers?: Record<string, string>;
  body?: any;
}

export class RequestWrapper {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private buildUrl(endpoint: string): string {
    return `${this.baseUrl}/${endpoint}`;
  }

  private async fetchWithMethod<T>(
    url: string,
    method: string,
    options?: FetchOptions
  ): Promise<T> {
    const response = await axios(url, {
      method,
      headers: options?.headers || {},
      data: options?.body ? JSON.stringify(options.body) : undefined,
    });

    if (!response.data) {
      throw new Error(`Fetch failed with status ${response.status}`);
    }

    return response.data as T;
  }

  async get<T>(endpoint: string, options?: FetchOptions): Promise<T> {
    const url = this.buildUrl(endpoint);

    return this.fetchWithMethod(url, "GET", options);
  }

  async post<T>(endpoint: string, options?: FetchOptions): Promise<T> {
    const url = this.buildUrl(endpoint);
    return this.fetchWithMethod(url, "POST", options);
  }

  async delete<T>(endpoint: string, options?: FetchOptions): Promise<T> {
    const url = this.buildUrl(endpoint);
    return this.fetchWithMethod(url, "DELETE", options);
  }
}
