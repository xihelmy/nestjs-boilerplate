export enum UserRoleEnum {
  SUPERADMIN = 1,
  COMPANY_ADMIN = 2,
  COMPANY_MEMBER = 3,
}

export const UserRoleMapping = {
  [UserRoleEnum.SUPERADMIN]: 'SUPERADMIN',
  [UserRoleEnum.COMPANY_ADMIN]: 'COMPANY_ADMIN',
  [UserRoleEnum.COMPANY_MEMBER]: 'COMPANY_MEMBER',
};
