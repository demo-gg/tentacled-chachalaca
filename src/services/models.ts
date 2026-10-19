export interface SlackMessage {
  channel: string;
  text: string;
  blocks?: SlackBlock[];
  threadTs?: string;
  metadata?: MessageMetadata;
}

export interface SlackBlock {
  type: "section" | "header" | "divider" | "image" | "actions" | "context";
  text?: TextBlock;
  image_url?: string;
  alt_text?: string;
  elements?: BlockElement[];
}

export interface TextBlock {
  type: "mrkdwn" | "plain_text";
  text: string;
  verbatim?: boolean;
}

export interface BlockElement {
  type: string;
  text?: string;
  value?: string;
  action_id?: string;
}

export interface MessageMetadata {
  event_type: string;
  event_payload?: Record<string, unknown>;
}

export interface SlackResponse {
  ok: boolean;
  channel?: string;
  ts?: string;
  message?: SlackMessage;
  error?: string;
}
