import { forwardRef, ForwardRefRenderFunction } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

interface SelectProps extends ChakraSelectProps {
  fieldName: string;
  label?: string;
  error?: FieldError;
  options?: Array<{
    value: string;
    label: string;
    id: any;
  }>;
  handleValueChosen?: (value: any) => void;
}

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { fieldName, handleValueChosen, label, error = null, options = [], ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {label && (
        <FormLabel htmlFor={fieldName} color="blue.500">
          {label}
        </FormLabel>
      )}

      <ChakraSelect
        name={fieldName}
        id={fieldName}
        border="1px"
        bgColor="white"
        color="gray.400"
        variant="unstyled"
        borderBlockEndColor="blue.500"
        borderBlockStartColor="blue.500"
        borderInlineEndColor="blue.500"
        borderInlineStartColor="blue.500"
        size="sm"
        {...rest}
        ref={ref}
      >
        {options
          .sort((a, b) => {
            if (a.label < b.label) return -1;
            if (a.label > b.label) return 1;
            return 0;
          })
          .map((item) => {
            return (
              <option key={item.id} value={item.value}>
                {item.label}
              </option>
            );
          })}
      </ChakraSelect>
      {!!error && (
        <FormErrorMessage justifyContent="flex-end">
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export const Select = forwardRef(SelectBase);
