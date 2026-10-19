export interface NotificationConfig {
  slackToken: string;
  defaultChannel: string;
  defaultThreadTs?: string;
  retryAttempts?: number;
  retryDelayMs?: number;
}

export const defaultConfig: Partial<NotificationConfig> = {
  retryAttempts: 3,
  retryDelayMs: 1000,
  defaultChannel: "#general",
};

export function loadConfig(): NotificationConfig {
  const config: NotificationConfig = {
    slackToken: process.env.SLACK_TOKEN || "",
    defaultChannel: process.env.SLACK_CHANNEL || defaultConfig.defaultChannel,
    retryAttempts: defaultConfig.retryAttempts,
    retryDelayMs: defaultConfig.retryDelayMs,
  };

  if (!config.slackToken) {
    throw new Error("Missing required environment variable: SLACK_TOKEN");
  }

  return config;
}
