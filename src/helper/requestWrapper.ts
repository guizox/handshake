interface FetchOptions {
  headers?: Record<string, string>;
  body?: any;
}

export class FetchWrapper {
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
    const requestOptions: RequestInit = {
      method,
      headers: options?.headers || {},
      body: options?.body ? JSON.stringify(options.body) : undefined,
    };

    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error(`Fetch failed with status ${response.status}`);
    }

    return response as T;
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
