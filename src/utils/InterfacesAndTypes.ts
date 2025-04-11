export namespace PropsInterfaces {
  export interface Desc {
    imgPath: string;
    title: string;
    description: string;
    strong: string;
    altForImage: string;
  }

  export interface Modal {
    isOpen: boolean;
    onClose: () => void;
  }

  export interface LabelInput {
    name: string;
    text: string;
    type: string;
    labelStyle?: string;
    inputStyle?: string;
    placeholderText?: string;
    complexStyle?: string;
    errorMessage?: string;
  }
}
