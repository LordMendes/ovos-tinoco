import { forwardRef, ForwardRefRenderFunction } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

interface TextareaProps extends ChakraTextareaProps {
  fieldName: string;
  label?: string;
  error?: FieldError;
}

const TextareaBase: ForwardRefRenderFunction<HTMLTextAreaElement, TextareaProps> = (
  { fieldName, label, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error} mt="6">
      {label && <FormLabel htmlFor={fieldName} color="blue.500">{label}</FormLabel>}

      <ChakraTextarea
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

export const Textarea = forwardRef(TextareaBase);
