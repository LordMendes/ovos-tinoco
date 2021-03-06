import { forwardRef, ForwardRefRenderFunction } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  fieldName: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { fieldName, label, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel htmlFor={fieldName} color="blue.500">{label}</FormLabel>}

      <ChakraInput
        name={fieldName}
        id={fieldName}
        border="1px"
        bgColor="white"
        variant="unstyled"
        borderBlockEndColor="blue.500"
        borderBlockStartColor="blue.500"
        borderInlineEndColor="blue.500"
        borderInlineStartColor="blue.500"
        p="1"
        size="sm"
        {...rest}
        ref={ref}
      />
      {!!error && (
        <FormErrorMessage justifyContent="flex-end">
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
