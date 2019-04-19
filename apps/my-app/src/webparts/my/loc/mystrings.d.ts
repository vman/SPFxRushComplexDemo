declare interface IMyWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'MyWebPartStrings' {
  const strings: IMyWebPartStrings;
  export = strings;
}
