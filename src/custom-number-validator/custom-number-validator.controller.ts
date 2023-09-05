import { Controller } from '@nestjs/common';
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'customNumber', async: false })
@Controller()
export class CustomNumberValidator implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    // La expresión regular para validar un número de 9 dígitos con un guión y un número opcional es la siguiente:
    const regex = /^[0-9]{9}-[0-9]?$/;
    return typeof value === 'string' && regex.test(value);
  }
  defaultMessage(args: ValidationArguments) {
    return 'El formato del número no es válido. Debe tener 9 dígitos, un guión y un número opcional al final.';
  }
}