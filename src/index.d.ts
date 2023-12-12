export interface IExtendOptions {
  props?: { [key: string]: any };
  methods?: { [key: string]: any };
  computed?: { [key: string]: any };
}

export declare class VueInheritance {
  static extend(extendOptions: IExtendOptions): VueInheritance;
  static implement(extendOptions: IExtendOptions): VueInheritance;
  extend(extendOptions: IExtendOptions): VueInheritance;
  implement(extendOptions: IExtendOptions): VueInheritance;
  props?: { [key: string]: any };
  methods?: { [key: string]: any };
  computed?: { [key: string]: any };
}