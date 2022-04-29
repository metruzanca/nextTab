export enum Fields {
  Name = "name",
  Href = "href",
}

export type FormState = {
  [Fields.Name]: string;
  [Fields.Href]: string;
};