import { number, string } from 'joi';

export const productIdValidation = {
  params: {
    id: number()
      .integer()
      .required(),
  },
};

export const productPayloadValidation = {
  body: {
    name: string()
      .max(50)
      .required()
  },
};
