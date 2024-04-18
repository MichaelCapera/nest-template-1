import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    UserAuthentication() {
        return 'Auth Module Ok';
    }
}
