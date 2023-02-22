import { ChangeEvent, useState } from "react";

export const useForm = <T extends Object>(objectInitial: T) => {
  const [object, setObject] = useState(objectInitial);
  const dobleLink = ({ target }: ChangeEvent<any>) => {
    const { name, value } = target;

    setObject({
        ...object,
        [name]: value,
    });
  };
  return{
    object,
    dobleLink,
    ...object,
  };
};
