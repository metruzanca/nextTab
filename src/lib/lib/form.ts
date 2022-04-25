
// TODO improve this

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getFormFields<FS = any>(form: EventTarget | null) {
  if (form) {
    const formData = new FormData(form as HTMLFormElement);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data: any = {};

      formData.forEach((value, name) => {
        data[name] = value;
      });

    return data as FS;
  }
  return {} as FS;
}