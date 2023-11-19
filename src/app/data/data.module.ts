import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CvRepository } from '../domain/repositories/cv.repository';
import { CvRepositoryHttpImpl } from './repositories/cv/cv-http-impl.repository';
import { DeleteCv } from '../domain/usecases/cv/delete-cv.usecase';
import { GetCvById } from '../domain/usecases/cv/get-cv-by-id.usecase';
import { GetAllCvs } from '../domain/usecases/cv/get-all-cvs.usecase';
import { UserRepository } from '../domain/repositories/user.repository';
import { LoginUser } from '../domain/usecases/user/login-user.usecase';
import { LogoutUser } from '../domain/usecases/user/logout-user.usecase';
import { UserlRepositoryHttpImp } from './repositories/user/user-http-impl.repository';

const getCvByIdUseCaseFactory = (cvRepo: CvRepository) => new GetCvById(cvRepo);
export const getCvByIdUseCaseProvider = {
  provide: GetCvById,
  useFactory: getCvByIdUseCaseFactory,
  deps: [CvRepository],
};

const getAllCvsUseCaseFactory = (cvRepo: CvRepository) => new GetAllCvs(cvRepo);
export const getAllCvsUseCaseProvider = {
    provide: GetAllCvs,
    useFactory: getAllCvsUseCaseFactory,
    deps: [CvRepository],
};

const deleteCvUseCaseFactory = (cvRepo: CvRepository) => new DeleteCv(cvRepo);
export const deleteCvUseCaseProvider = {
  provide: DeleteCv,
  useFactory: deleteCvUseCaseFactory,
  deps: [CvRepository],
};

const loginUserUseCaseFactory = (userRepo: UserRepository) => new LoginUser(userRepo);
export const loginUserUseCaseProvider = {
  provide: LoginUser,
  useFactory: loginUserUseCaseFactory,
  deps: [UserRepository],
};

const logoutUserUseCaseFactory = (userRepo: UserRepository) => new LogoutUser(userRepo);
export const logoutUserUseCaseProvider = {
  provide: LogoutUser,
  useFactory: logoutUserUseCaseFactory,
  deps: [UserRepository],
};

@NgModule({
  providers: [
    getAllCvsUseCaseProvider,
    getCvByIdUseCaseProvider,
    deleteCvUseCaseProvider,
    loginUserUseCaseProvider,
    logoutUserUseCaseProvider,
    { provide: CvRepository, useClass: CvRepositoryHttpImpl },
    { provide: UserRepository, useClass: UserlRepositoryHttpImp },
  ],
  imports: [CommonModule, HttpClientModule],
})
export class DataModule { }