export class CreateUserDto {
  readonly firstname ?: string
  readonly lastname ?: string
  readonly age ?: string
  readonly password: string
  readonly email: string
  readonly username: string
}