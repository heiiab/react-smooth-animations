class StyleSheets {
  private static instance: StyleSheets;
  public container: HTMLStyleElement | null = null;

  private constructor() {
    this.init();
  }

  private init() {
    const style = document.createElement('style');

    document.getElementsByTagName('head')[0].appendChild(style);
    this.container = style;
  }

  public insertRule(keyframes: string) {
    this.container?.sheet?.insertRule(keyframes);
  }

  public static getInstance(): StyleSheets {
    if (!StyleSheets.instance) {
      StyleSheets.instance = new StyleSheets();
    }

    return StyleSheets.instance;
  }
}

export default StyleSheets;
