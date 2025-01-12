import Color from 'color';
declare global {
  type PromiseAble<T> = T | Promise<T>;
  type AllAwaited<T extends object | any[]> = {
    [K in keyof T]: Awaited<T[K]>;
  };
  type PageBackground = Color | string | Component;
  type PageConfig = {
    pageList: Record<string, (id: string) => Promise<Page>>;
  };
  type NumberRange = {
    min?: number;
    max?: number;
  };
  type PageConfig = {
    pageList: Record<string, (id: string) => Promise<Page>>;
  };
  type SizeRatio = {
    width: number;
    height: number;
  };
  type CardSizeConfig = {
    width: NumberRange;
    height: NumberRange;
    ratio: SizeRatio;
    linesPerColumn?: number;
  };
  type Card = {
    component: PromiseAble<Component>;
    size: PromiseAble<CardSizeConfig> | CardSizeCalcCallable;
  };
  type CardSizeCalcResult = {
    width: number;
    height: number;
    fontsize?: string;
  };
  type CardSizeCalcCallable = (
    size: {
      width: number;
      height: number;
    },
    card: AllAwaited<Card>
  ) => CardSizeCalcResult;
  type Page = {
    cards: PromiseAble<Card[]>;
    background: PromiseAble<PageBackground>;
    hideCurrentCard?: boolean;
    title?: string;
    canJumpPage?: boolean;
    padding?: {
      top?: string;
      bottom?: string;
      left?: string;
      right?: string;
    };
  };
  type Optional<T> = {
    [K in keyof T]?: T[K];
  };
  type Keyable = string | symbol;
}
