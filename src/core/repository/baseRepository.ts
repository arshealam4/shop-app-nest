import mongoose from 'mongoose';
import { IRepository } from './IRepository';
import { LoggerHelper } from '@/core/helpers';

const FILE_NAME = (__filename);

export class BaseRepository<T> implements IRepository<T> {
  private _model: mongoose.Model<mongoose.Document>;
  logger: LoggerHelper;

  constructor(
    schemaModel: mongoose.Model<mongoose.Document>,
    logger: LoggerHelper,
  ) {
    this._model = schemaModel;
    this.logger = logger;
  }

  async create(item: T): Promise<any> {
    this.logger.debug({
      app_message: 'CREATE_START',
      log_info: {
        fileName: FILE_NAME,
      },
      metadata: {},
    });
    try {
      return await this._model.create(item);
    } catch (err) {
      this.logger.error({
        app_message: 'CREATE_ERROR',
        log_info: {
          fileName: FILE_NAME,
          message: JSON.stringify(err),
        },
        metadata: {},
      });
      throw err;
    }
  }

  async createPartial(item: Partial<T>): Promise<any> {
    this.logger.debug({
      app_message: 'CREATE_PARTIAL_START',
      log_info: {
        fileName: FILE_NAME,
      },
      metadata: {},
    });
    try {
      const objectToSave = new this._model(item);
      return await objectToSave.save();
    } catch (err) {
      this.logger.error({
        app_message: 'CREATE_PARTIAL_ERROR',
        log_info: {
          fileName: FILE_NAME,
          errorMessage: err.message,
          errorStack: err.stack,
        },
        metadata: {},
      });
      throw err;
    }
  }


  async findAllByQuery(
    query: Record<string, any>,
    filterFields?: Record<string, any>,
  ): Promise<any> {
    this.logger.debug({
      app_message: 'FIND_BY_QUERY_START',
      log_info: {
        fileName: FILE_NAME,
      },
      metadata: query,
    });
    try {
      return await this._model
        .find(query, filterFields)
        .lean()
        .exec();
    } catch (err) {
      this.logger.error({
        app_message: 'FIND_BY_QUERY_ERROR',
        log_info: {
          fileName: FILE_NAME,
          message: JSON.stringify(err),
        },
        metadata: query,
      });
      throw err;
    }
  }

  async bulkInsert(items: [Record<string, any>]): Promise<any> {
    try {
      return await this._model.insertMany(items)
    } catch (err) {
      this.logger.error({
        app_message: 'INSERT_MANY_ERROR',
        log_info: {
          fileName: FILE_NAME,
          errorMessage: err.message,
          errorStack: err.stack,
        },
        metadata: {},
      });
      throw err;
    }
  }

}
