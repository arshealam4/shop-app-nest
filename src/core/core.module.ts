import { Module, Global } from '@nestjs/common';
import { BaseRepository } from './repository';
import { LoggerHelper } from "@/core/helpers";

@Global()
@Module({
    imports: [],
    providers: [BaseRepository,LoggerHelper],
    exports: [BaseRepository,LoggerHelper],
})
export class CoreModule { }