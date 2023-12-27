export interface IExtendOptions {
  data?: function;
  emits?: string[];
  props?: { [key: string]: any };
  methods?: { [key: string]: any };
  computed?: { [key: string]: any };
}

export declare class VueInheritance {
  static extend(extendOptions: IExtendOptions): VueInheritance;
  static implement(extendOptions: IExtendOptions): VueInheritance;
  extend(extendOptions: IExtendOptions): VueInheritance;
  implement(extendOptions: IExtendOptions): VueInheritance;
  data?: function;
  emits?: string[];
  props?: { [key: string]: any };
  methods?: { [key: string]: any };
  computed?: { [key: string]: any };
}