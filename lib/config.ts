export interface ConfigProps {
  config: Config;
}

export type Config = {
  root: string;
  title: string;
  subTitle: string;
  compiler: CompilerConfig;
  chat: ChatConfig;
  portfolio: PortfolioConfig;
  articleNamespace: string;
};

type ConfigEntry<T> = {
  namespace: string;
  route: string;
  text: T;
};

type ChatConfig = ConfigEntry<{
  systemName: string;
  userName: string;
  cyreneName: string;
  healthCheckingText: string;
  sendingMessageText: string;
  failedToSendMessageText: string;
  healthCheckFailedText: string;
  waitingForReplyText: string;
  placeholderText: string;
  systemPrompt: string;
  autoPlayEnabledHint: string;
  clickToProceedHint: string;
  disclaimer: string;
  privacy: string;
}>;

type PortfolioConfig = ConfigEntry<{}>;

type CompilerConfig = ConfigEntry<{ runningOn: string }>;

export const ZH: Config = {
  root: "zh",
  title: "欢迎来到 Felys\xA0项\u2060目",
  subTitle: "致爱莉希雅与昔涟",
  compiler: {
    namespace: "编译器",
    route: "compiler",
    text: { runningOn: "运行在" },
  },
  chat: {
    namespace: "聊天",
    route: "chat",
    text: {
      systemName: "δ-me13",
      userName: "银河猫猫侠",
      cyreneName: "昔涟",
      healthCheckingText: "连接翁法罗斯万帷网中……",
      sendingMessageText: "消息发送中……",
      waitingForReplyText: "昔涟正在输入中……",
      failedToSendMessageText: "发送失败，请稍后重试。",
      healthCheckFailedText: "银河猫猫侠正在占用显卡中，服务暂停。",
      placeholderText: "陪昔涟聊聊天吧，按「回车」发送消息。",
      systemPrompt:
        "铁幕之战后，终于和银河猫猫侠重逢了，一同回到哀丽秘榭，坐在秋千上闲聊。",
      autoPlayEnabledHint: "已启用自动播放",
      clickToProceedHint: "点击对话框继续",
      disclaimer:
        "免责声明：本项目基于对开源大语言模型微调，所用训练语料完全忠于原作，一字未改，未经任何额外数据集的增强，亦未引入任何人类偏好对齐，因此使用者须自行承担由生成内容引发的全部风险。",
      privacy:
        "隐私政策：模型部署在自用显卡，通过内网穿透对外提供无状态服务，不会记录任何对话记录。",
    },
  },
  portfolio: {
    namespace: "作品集",
    route: "portfolio",
    text: {},
  },
  articleNamespace: "文章",
};

export const EN: Config = {
  root: "en",
  title: "Welcome to the Felys\xA0project",
  subTitle: "To Elysia and Cyrene",
  compiler: {
    namespace: "Compiler",
    route: "compiler",
    text: { runningOn: "on" },
  },
  chat: {
    namespace: "Chat",
    route: "chat",
    text: {
      systemName: "δ-me13",
      userName: "FelysNeko",
      cyreneName: "Cyrene",
      healthCheckingText: "Connecting to Amphoreus World Wound Web...",
      sendingMessageText: "Sending message...",
      waitingForReplyText: "Cyrene is typing...",
      failedToSendMessageText:
        "Failed to send the message, please retry later.",
      healthCheckFailedText:
        "FelysNeko is occupying the GPU, service is paused.",
      placeholderText: "Chat with Cyrene, press ENTER to send.",
      systemPrompt:
        "After the battling Irontomb, finally reunited with FelysNeko. Together back to Aedes Elysiae, sitting on the swing, chatting.",
      autoPlayEnabledHint: "Auto-play enabled",
      clickToProceedHint: "Click on the chat box to proceed",
      disclaimer:
        "Disclaimer: This project fine-tunes an open-source LLM using the original corpus verbatim, with no additional datasets or human preference alignment. Users assume all risks arising from generated content.",
      privacy:
        "Privacy Policy: The model is deployed on a personal graphics card, providing stateless services externally via intranet penetration, and no conversation logs will be recorded.",
    },
  },
  portfolio: {
    namespace: "Portfolio",
    route: "portfolio",
    text: {},
  },
  articleNamespace: "Articles",
};
