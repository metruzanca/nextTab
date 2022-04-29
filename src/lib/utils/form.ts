// Form onSubmit inspired by Formik
type Handler<FS> = (fS: FS, form: HTMLFormElement) => void;

export const formSubmit = <FS>(handler: Handler<FS>) => ({ target }: SubmitEvent) => {
  if (target) {
    const formData = new FormData(target as HTMLFormElement);
    const data: any = {};

    formData.forEach((value, name) => {
      data[name] = value;
    });

    return handler(data as FS, target as HTMLFormElement);
  }
};
