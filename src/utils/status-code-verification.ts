import { BadRequestException } from '@nestjs/common';
import { STATUS_ERRORS_IMPORT } from '../constants';

const statusCodeVerification = (statusCode: number, reject, type: string) => {
  if (STATUS_ERRORS_IMPORT.includes(statusCode)) {
    reject(
      new BadRequestException({
        title: `${type} not found`,
        description: `${type} not found or does not exist`,
        status: 400,
      }),
    );
  }
};

export { statusCodeVerification };