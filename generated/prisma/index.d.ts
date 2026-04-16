
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model carriage
 * 
 */
export type carriage = $Result.DefaultSelection<Prisma.$carriagePayload>
/**
 * Model schedule
 * 
 */
export type schedule = $Result.DefaultSelection<Prisma.$schedulePayload>
/**
 * Model seat
 * 
 */
export type seat = $Result.DefaultSelection<Prisma.$seatPayload>
/**
 * Model seat_schedule
 * 
 */
export type seat_schedule = $Result.DefaultSelection<Prisma.$seat_schedulePayload>
/**
 * Model ticket_purchase
 * 
 */
export type ticket_purchase = $Result.DefaultSelection<Prisma.$ticket_purchasePayload>
/**
 * Model purchase_detail
 * 
 */
export type purchase_detail = $Result.DefaultSelection<Prisma.$purchase_detailPayload>
/**
 * Model train
 * 
 */
export type train = $Result.DefaultSelection<Prisma.$trainPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const seatschedule_status: {
  AVAILABLE: 'AVAILABLE',
  BOOKED: 'BOOKED'
};

export type seatschedule_status = (typeof seatschedule_status)[keyof typeof seatschedule_status]


export const carriage_category: {
  EXECUTIVE: 'EXECUTIVE',
  BUSINESS: 'BUSINESS',
  ECONOMY: 'ECONOMY'
};

export type carriage_category = (typeof carriage_category)[keyof typeof carriage_category]


export const user_role: {
  ADMIN: 'ADMIN',
  CUSTOMER: 'CUSTOMER'
};

export type user_role = (typeof user_role)[keyof typeof user_role]


export const status: {
  FINISHED: 'FINISHED',
  CANCELLED: 'CANCELLED',
  ACTIVED: 'ACTIVED'
};

export type status = (typeof status)[keyof typeof status]


export const train_status: {
  AVAILABLE: 'AVAILABLE',
  ACTIVE: 'ACTIVE'
};

export type train_status = (typeof train_status)[keyof typeof train_status]

}

export type seatschedule_status = $Enums.seatschedule_status

export const seatschedule_status: typeof $Enums.seatschedule_status

export type carriage_category = $Enums.carriage_category

export const carriage_category: typeof $Enums.carriage_category

export type user_role = $Enums.user_role

export const user_role: typeof $Enums.user_role

export type status = $Enums.status

export const status: typeof $Enums.status

export type train_status = $Enums.train_status

export const train_status: typeof $Enums.train_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Carriages
 * const carriages = await prisma.carriage.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Carriages
   * const carriages = await prisma.carriage.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.carriage`: Exposes CRUD operations for the **carriage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carriages
    * const carriages = await prisma.carriage.findMany()
    * ```
    */
  get carriage(): Prisma.carriageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.scheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seat`: Exposes CRUD operations for the **seat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seats
    * const seats = await prisma.seat.findMany()
    * ```
    */
  get seat(): Prisma.seatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seat_schedule`: Exposes CRUD operations for the **seat_schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seat_schedules
    * const seat_schedules = await prisma.seat_schedule.findMany()
    * ```
    */
  get seat_schedule(): Prisma.seat_scheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket_purchase`: Exposes CRUD operations for the **ticket_purchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ticket_purchases
    * const ticket_purchases = await prisma.ticket_purchase.findMany()
    * ```
    */
  get ticket_purchase(): Prisma.ticket_purchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchase_detail`: Exposes CRUD operations for the **purchase_detail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchase_details
    * const purchase_details = await prisma.purchase_detail.findMany()
    * ```
    */
  get purchase_detail(): Prisma.purchase_detailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.train`: Exposes CRUD operations for the **train** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trains
    * const trains = await prisma.train.findMany()
    * ```
    */
  get train(): Prisma.trainDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    carriage: 'carriage',
    schedule: 'schedule',
    seat: 'seat',
    seat_schedule: 'seat_schedule',
    ticket_purchase: 'ticket_purchase',
    purchase_detail: 'purchase_detail',
    train: 'train',
    user: 'user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "carriage" | "schedule" | "seat" | "seat_schedule" | "ticket_purchase" | "purchase_detail" | "train" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      carriage: {
        payload: Prisma.$carriagePayload<ExtArgs>
        fields: Prisma.carriageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.carriageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carriagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.carriageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carriagePayload>
          }
          findFirst: {
            args: Prisma.carriageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carriagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.carriageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carriagePayload>
          }
          findMany: {
            args: Prisma.carriageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carriagePayload>[]
          }
          create: {
            args: Prisma.carriageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carriagePayload>
          }
          createMany: {
            args: Prisma.carriageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.carriageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carriagePayload>
          }
          update: {
            args: Prisma.carriageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carriagePayload>
          }
          deleteMany: {
            args: Prisma.carriageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.carriageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.carriageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carriagePayload>
          }
          aggregate: {
            args: Prisma.CarriageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarriage>
          }
          groupBy: {
            args: Prisma.carriageGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarriageGroupByOutputType>[]
          }
          count: {
            args: Prisma.carriageCountArgs<ExtArgs>
            result: $Utils.Optional<CarriageCountAggregateOutputType> | number
          }
        }
      }
      schedule: {
        payload: Prisma.$schedulePayload<ExtArgs>
        fields: Prisma.scheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.scheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.scheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>
          }
          findFirst: {
            args: Prisma.scheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.scheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>
          }
          findMany: {
            args: Prisma.scheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>[]
          }
          create: {
            args: Prisma.scheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>
          }
          createMany: {
            args: Prisma.scheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.scheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>
          }
          update: {
            args: Prisma.scheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>
          }
          deleteMany: {
            args: Prisma.scheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.scheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.scheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.scheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.scheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      seat: {
        payload: Prisma.$seatPayload<ExtArgs>
        fields: Prisma.seatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.seatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.seatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatPayload>
          }
          findFirst: {
            args: Prisma.seatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.seatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatPayload>
          }
          findMany: {
            args: Prisma.seatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatPayload>[]
          }
          create: {
            args: Prisma.seatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatPayload>
          }
          createMany: {
            args: Prisma.seatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.seatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatPayload>
          }
          update: {
            args: Prisma.seatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatPayload>
          }
          deleteMany: {
            args: Prisma.seatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.seatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.seatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatPayload>
          }
          aggregate: {
            args: Prisma.SeatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeat>
          }
          groupBy: {
            args: Prisma.seatGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeatGroupByOutputType>[]
          }
          count: {
            args: Prisma.seatCountArgs<ExtArgs>
            result: $Utils.Optional<SeatCountAggregateOutputType> | number
          }
        }
      }
      seat_schedule: {
        payload: Prisma.$seat_schedulePayload<ExtArgs>
        fields: Prisma.seat_scheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.seat_scheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seat_schedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.seat_scheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seat_schedulePayload>
          }
          findFirst: {
            args: Prisma.seat_scheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seat_schedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.seat_scheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seat_schedulePayload>
          }
          findMany: {
            args: Prisma.seat_scheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seat_schedulePayload>[]
          }
          create: {
            args: Prisma.seat_scheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seat_schedulePayload>
          }
          createMany: {
            args: Prisma.seat_scheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.seat_scheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seat_schedulePayload>
          }
          update: {
            args: Prisma.seat_scheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seat_schedulePayload>
          }
          deleteMany: {
            args: Prisma.seat_scheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.seat_scheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.seat_scheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seat_schedulePayload>
          }
          aggregate: {
            args: Prisma.Seat_scheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeat_schedule>
          }
          groupBy: {
            args: Prisma.seat_scheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<Seat_scheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.seat_scheduleCountArgs<ExtArgs>
            result: $Utils.Optional<Seat_scheduleCountAggregateOutputType> | number
          }
        }
      }
      ticket_purchase: {
        payload: Prisma.$ticket_purchasePayload<ExtArgs>
        fields: Prisma.ticket_purchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ticket_purchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_purchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ticket_purchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_purchasePayload>
          }
          findFirst: {
            args: Prisma.ticket_purchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_purchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ticket_purchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_purchasePayload>
          }
          findMany: {
            args: Prisma.ticket_purchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_purchasePayload>[]
          }
          create: {
            args: Prisma.ticket_purchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_purchasePayload>
          }
          createMany: {
            args: Prisma.ticket_purchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ticket_purchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_purchasePayload>
          }
          update: {
            args: Prisma.ticket_purchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_purchasePayload>
          }
          deleteMany: {
            args: Prisma.ticket_purchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ticket_purchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ticket_purchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticket_purchasePayload>
          }
          aggregate: {
            args: Prisma.Ticket_purchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket_purchase>
          }
          groupBy: {
            args: Prisma.ticket_purchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ticket_purchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ticket_purchaseCountArgs<ExtArgs>
            result: $Utils.Optional<Ticket_purchaseCountAggregateOutputType> | number
          }
        }
      }
      purchase_detail: {
        payload: Prisma.$purchase_detailPayload<ExtArgs>
        fields: Prisma.purchase_detailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.purchase_detailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_detailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.purchase_detailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_detailPayload>
          }
          findFirst: {
            args: Prisma.purchase_detailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_detailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.purchase_detailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_detailPayload>
          }
          findMany: {
            args: Prisma.purchase_detailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_detailPayload>[]
          }
          create: {
            args: Prisma.purchase_detailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_detailPayload>
          }
          createMany: {
            args: Prisma.purchase_detailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.purchase_detailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_detailPayload>
          }
          update: {
            args: Prisma.purchase_detailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_detailPayload>
          }
          deleteMany: {
            args: Prisma.purchase_detailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.purchase_detailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.purchase_detailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_detailPayload>
          }
          aggregate: {
            args: Prisma.Purchase_detailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchase_detail>
          }
          groupBy: {
            args: Prisma.purchase_detailGroupByArgs<ExtArgs>
            result: $Utils.Optional<Purchase_detailGroupByOutputType>[]
          }
          count: {
            args: Prisma.purchase_detailCountArgs<ExtArgs>
            result: $Utils.Optional<Purchase_detailCountAggregateOutputType> | number
          }
        }
      }
      train: {
        payload: Prisma.$trainPayload<ExtArgs>
        fields: Prisma.trainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.trainFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.trainFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trainPayload>
          }
          findFirst: {
            args: Prisma.trainFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.trainFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trainPayload>
          }
          findMany: {
            args: Prisma.trainFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trainPayload>[]
          }
          create: {
            args: Prisma.trainCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trainPayload>
          }
          createMany: {
            args: Prisma.trainCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.trainDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trainPayload>
          }
          update: {
            args: Prisma.trainUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trainPayload>
          }
          deleteMany: {
            args: Prisma.trainDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.trainUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.trainUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trainPayload>
          }
          aggregate: {
            args: Prisma.TrainAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrain>
          }
          groupBy: {
            args: Prisma.trainGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrainGroupByOutputType>[]
          }
          count: {
            args: Prisma.trainCountArgs<ExtArgs>
            result: $Utils.Optional<TrainCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    carriage?: carriageOmit
    schedule?: scheduleOmit
    seat?: seatOmit
    seat_schedule?: seat_scheduleOmit
    ticket_purchase?: ticket_purchaseOmit
    purchase_detail?: purchase_detailOmit
    train?: trainOmit
    user?: userOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CarriageCountOutputType
   */

  export type CarriageCountOutputType = {
    seat: number
  }

  export type CarriageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seat?: boolean | CarriageCountOutputTypeCountSeatArgs
  }

  // Custom InputTypes
  /**
   * CarriageCountOutputType without action
   */
  export type CarriageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarriageCountOutputType
     */
    select?: CarriageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarriageCountOutputType without action
   */
  export type CarriageCountOutputTypeCountSeatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: seatWhereInput
  }


  /**
   * Count Type ScheduleCountOutputType
   */

  export type ScheduleCountOutputType = {
    seat_schedule: number
    ticket_purchase: number
  }

  export type ScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seat_schedule?: boolean | ScheduleCountOutputTypeCountSeat_scheduleArgs
    ticket_purchase?: boolean | ScheduleCountOutputTypeCountTicket_purchaseArgs
  }

  // Custom InputTypes
  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleCountOutputType
     */
    select?: ScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeCountSeat_scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: seat_scheduleWhereInput
  }

  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeCountTicket_purchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticket_purchaseWhereInput
  }


  /**
   * Count Type SeatCountOutputType
   */

  export type SeatCountOutputType = {
    purchase_detail: number
    seat_schedule: number
  }

  export type SeatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase_detail?: boolean | SeatCountOutputTypeCountPurchase_detailArgs
    seat_schedule?: boolean | SeatCountOutputTypeCountSeat_scheduleArgs
  }

  // Custom InputTypes
  /**
   * SeatCountOutputType without action
   */
  export type SeatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatCountOutputType
     */
    select?: SeatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeatCountOutputType without action
   */
  export type SeatCountOutputTypeCountPurchase_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: purchase_detailWhereInput
  }

  /**
   * SeatCountOutputType without action
   */
  export type SeatCountOutputTypeCountSeat_scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: seat_scheduleWhereInput
  }


  /**
   * Count Type Ticket_purchaseCountOutputType
   */

  export type Ticket_purchaseCountOutputType = {
    purchase_detail: number
  }

  export type Ticket_purchaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase_detail?: boolean | Ticket_purchaseCountOutputTypeCountPurchase_detailArgs
  }

  // Custom InputTypes
  /**
   * Ticket_purchaseCountOutputType without action
   */
  export type Ticket_purchaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket_purchaseCountOutputType
     */
    select?: Ticket_purchaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Ticket_purchaseCountOutputType without action
   */
  export type Ticket_purchaseCountOutputTypeCountPurchase_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: purchase_detailWhereInput
  }


  /**
   * Count Type Purchase_detailCountOutputType
   */

  export type Purchase_detailCountOutputType = {
    seat_schedule: number
  }

  export type Purchase_detailCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seat_schedule?: boolean | Purchase_detailCountOutputTypeCountSeat_scheduleArgs
  }

  // Custom InputTypes
  /**
   * Purchase_detailCountOutputType without action
   */
  export type Purchase_detailCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase_detailCountOutputType
     */
    select?: Purchase_detailCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Purchase_detailCountOutputType without action
   */
  export type Purchase_detailCountOutputTypeCountSeat_scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: seat_scheduleWhereInput
  }


  /**
   * Count Type TrainCountOutputType
   */

  export type TrainCountOutputType = {
    carriage: number
    schedule: number
  }

  export type TrainCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carriage?: boolean | TrainCountOutputTypeCountCarriageArgs
    schedule?: boolean | TrainCountOutputTypeCountScheduleArgs
  }

  // Custom InputTypes
  /**
   * TrainCountOutputType without action
   */
  export type TrainCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainCountOutputType
     */
    select?: TrainCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrainCountOutputType without action
   */
  export type TrainCountOutputTypeCountCarriageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carriageWhereInput
  }

  /**
   * TrainCountOutputType without action
   */
  export type TrainCountOutputTypeCountScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: scheduleWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ticket_purchase: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket_purchase?: boolean | UserCountOutputTypeCountTicket_purchaseArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTicket_purchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticket_purchaseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model carriage
   */

  export type AggregateCarriage = {
    _count: CarriageCountAggregateOutputType | null
    _avg: CarriageAvgAggregateOutputType | null
    _sum: CarriageSumAggregateOutputType | null
    _min: CarriageMinAggregateOutputType | null
    _max: CarriageMaxAggregateOutputType | null
  }

  export type CarriageAvgAggregateOutputType = {
    id_carriage: number | null
    quota: number | null
    id_train: number | null
  }

  export type CarriageSumAggregateOutputType = {
    id_carriage: number | null
    quota: number | null
    id_train: number | null
  }

  export type CarriageMinAggregateOutputType = {
    id_carriage: number | null
    carriage_name: string | null
    quota: number | null
    carriage_category: $Enums.carriage_category | null
    id_train: number | null
  }

  export type CarriageMaxAggregateOutputType = {
    id_carriage: number | null
    carriage_name: string | null
    quota: number | null
    carriage_category: $Enums.carriage_category | null
    id_train: number | null
  }

  export type CarriageCountAggregateOutputType = {
    id_carriage: number
    carriage_name: number
    quota: number
    carriage_category: number
    id_train: number
    _all: number
  }


  export type CarriageAvgAggregateInputType = {
    id_carriage?: true
    quota?: true
    id_train?: true
  }

  export type CarriageSumAggregateInputType = {
    id_carriage?: true
    quota?: true
    id_train?: true
  }

  export type CarriageMinAggregateInputType = {
    id_carriage?: true
    carriage_name?: true
    quota?: true
    carriage_category?: true
    id_train?: true
  }

  export type CarriageMaxAggregateInputType = {
    id_carriage?: true
    carriage_name?: true
    quota?: true
    carriage_category?: true
    id_train?: true
  }

  export type CarriageCountAggregateInputType = {
    id_carriage?: true
    carriage_name?: true
    quota?: true
    carriage_category?: true
    id_train?: true
    _all?: true
  }

  export type CarriageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carriage to aggregate.
     */
    where?: carriageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carriages to fetch.
     */
    orderBy?: carriageOrderByWithRelationInput | carriageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: carriageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carriages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carriages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carriages
    **/
    _count?: true | CarriageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarriageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarriageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarriageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarriageMaxAggregateInputType
  }

  export type GetCarriageAggregateType<T extends CarriageAggregateArgs> = {
        [P in keyof T & keyof AggregateCarriage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarriage[P]>
      : GetScalarType<T[P], AggregateCarriage[P]>
  }




  export type carriageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carriageWhereInput
    orderBy?: carriageOrderByWithAggregationInput | carriageOrderByWithAggregationInput[]
    by: CarriageScalarFieldEnum[] | CarriageScalarFieldEnum
    having?: carriageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarriageCountAggregateInputType | true
    _avg?: CarriageAvgAggregateInputType
    _sum?: CarriageSumAggregateInputType
    _min?: CarriageMinAggregateInputType
    _max?: CarriageMaxAggregateInputType
  }

  export type CarriageGroupByOutputType = {
    id_carriage: number
    carriage_name: string
    quota: number
    carriage_category: $Enums.carriage_category
    id_train: number
    _count: CarriageCountAggregateOutputType | null
    _avg: CarriageAvgAggregateOutputType | null
    _sum: CarriageSumAggregateOutputType | null
    _min: CarriageMinAggregateOutputType | null
    _max: CarriageMaxAggregateOutputType | null
  }

  type GetCarriageGroupByPayload<T extends carriageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarriageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarriageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarriageGroupByOutputType[P]>
            : GetScalarType<T[P], CarriageGroupByOutputType[P]>
        }
      >
    >


  export type carriageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_carriage?: boolean
    carriage_name?: boolean
    quota?: boolean
    carriage_category?: boolean
    id_train?: boolean
    train?: boolean | trainDefaultArgs<ExtArgs>
    seat?: boolean | carriage$seatArgs<ExtArgs>
    _count?: boolean | CarriageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carriage"]>



  export type carriageSelectScalar = {
    id_carriage?: boolean
    carriage_name?: boolean
    quota?: boolean
    carriage_category?: boolean
    id_train?: boolean
  }

  export type carriageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_carriage" | "carriage_name" | "quota" | "carriage_category" | "id_train", ExtArgs["result"]["carriage"]>
  export type carriageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    train?: boolean | trainDefaultArgs<ExtArgs>
    seat?: boolean | carriage$seatArgs<ExtArgs>
    _count?: boolean | CarriageCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $carriagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "carriage"
    objects: {
      train: Prisma.$trainPayload<ExtArgs>
      seat: Prisma.$seatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_carriage: number
      carriage_name: string
      quota: number
      carriage_category: $Enums.carriage_category
      id_train: number
    }, ExtArgs["result"]["carriage"]>
    composites: {}
  }

  type carriageGetPayload<S extends boolean | null | undefined | carriageDefaultArgs> = $Result.GetResult<Prisma.$carriagePayload, S>

  type carriageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<carriageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarriageCountAggregateInputType | true
    }

  export interface carriageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['carriage'], meta: { name: 'carriage' } }
    /**
     * Find zero or one Carriage that matches the filter.
     * @param {carriageFindUniqueArgs} args - Arguments to find a Carriage
     * @example
     * // Get one Carriage
     * const carriage = await prisma.carriage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends carriageFindUniqueArgs>(args: SelectSubset<T, carriageFindUniqueArgs<ExtArgs>>): Prisma__carriageClient<$Result.GetResult<Prisma.$carriagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carriage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {carriageFindUniqueOrThrowArgs} args - Arguments to find a Carriage
     * @example
     * // Get one Carriage
     * const carriage = await prisma.carriage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends carriageFindUniqueOrThrowArgs>(args: SelectSubset<T, carriageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__carriageClient<$Result.GetResult<Prisma.$carriagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carriage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carriageFindFirstArgs} args - Arguments to find a Carriage
     * @example
     * // Get one Carriage
     * const carriage = await prisma.carriage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends carriageFindFirstArgs>(args?: SelectSubset<T, carriageFindFirstArgs<ExtArgs>>): Prisma__carriageClient<$Result.GetResult<Prisma.$carriagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carriage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carriageFindFirstOrThrowArgs} args - Arguments to find a Carriage
     * @example
     * // Get one Carriage
     * const carriage = await prisma.carriage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends carriageFindFirstOrThrowArgs>(args?: SelectSubset<T, carriageFindFirstOrThrowArgs<ExtArgs>>): Prisma__carriageClient<$Result.GetResult<Prisma.$carriagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carriages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carriageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carriages
     * const carriages = await prisma.carriage.findMany()
     * 
     * // Get first 10 Carriages
     * const carriages = await prisma.carriage.findMany({ take: 10 })
     * 
     * // Only select the `id_carriage`
     * const carriageWithId_carriageOnly = await prisma.carriage.findMany({ select: { id_carriage: true } })
     * 
     */
    findMany<T extends carriageFindManyArgs>(args?: SelectSubset<T, carriageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carriagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carriage.
     * @param {carriageCreateArgs} args - Arguments to create a Carriage.
     * @example
     * // Create one Carriage
     * const Carriage = await prisma.carriage.create({
     *   data: {
     *     // ... data to create a Carriage
     *   }
     * })
     * 
     */
    create<T extends carriageCreateArgs>(args: SelectSubset<T, carriageCreateArgs<ExtArgs>>): Prisma__carriageClient<$Result.GetResult<Prisma.$carriagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carriages.
     * @param {carriageCreateManyArgs} args - Arguments to create many Carriages.
     * @example
     * // Create many Carriages
     * const carriage = await prisma.carriage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends carriageCreateManyArgs>(args?: SelectSubset<T, carriageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Carriage.
     * @param {carriageDeleteArgs} args - Arguments to delete one Carriage.
     * @example
     * // Delete one Carriage
     * const Carriage = await prisma.carriage.delete({
     *   where: {
     *     // ... filter to delete one Carriage
     *   }
     * })
     * 
     */
    delete<T extends carriageDeleteArgs>(args: SelectSubset<T, carriageDeleteArgs<ExtArgs>>): Prisma__carriageClient<$Result.GetResult<Prisma.$carriagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carriage.
     * @param {carriageUpdateArgs} args - Arguments to update one Carriage.
     * @example
     * // Update one Carriage
     * const carriage = await prisma.carriage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends carriageUpdateArgs>(args: SelectSubset<T, carriageUpdateArgs<ExtArgs>>): Prisma__carriageClient<$Result.GetResult<Prisma.$carriagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carriages.
     * @param {carriageDeleteManyArgs} args - Arguments to filter Carriages to delete.
     * @example
     * // Delete a few Carriages
     * const { count } = await prisma.carriage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends carriageDeleteManyArgs>(args?: SelectSubset<T, carriageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carriages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carriageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carriages
     * const carriage = await prisma.carriage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends carriageUpdateManyArgs>(args: SelectSubset<T, carriageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Carriage.
     * @param {carriageUpsertArgs} args - Arguments to update or create a Carriage.
     * @example
     * // Update or create a Carriage
     * const carriage = await prisma.carriage.upsert({
     *   create: {
     *     // ... data to create a Carriage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carriage we want to update
     *   }
     * })
     */
    upsert<T extends carriageUpsertArgs>(args: SelectSubset<T, carriageUpsertArgs<ExtArgs>>): Prisma__carriageClient<$Result.GetResult<Prisma.$carriagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carriages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carriageCountArgs} args - Arguments to filter Carriages to count.
     * @example
     * // Count the number of Carriages
     * const count = await prisma.carriage.count({
     *   where: {
     *     // ... the filter for the Carriages we want to count
     *   }
     * })
    **/
    count<T extends carriageCountArgs>(
      args?: Subset<T, carriageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarriageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carriage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarriageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarriageAggregateArgs>(args: Subset<T, CarriageAggregateArgs>): Prisma.PrismaPromise<GetCarriageAggregateType<T>>

    /**
     * Group by Carriage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carriageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends carriageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: carriageGroupByArgs['orderBy'] }
        : { orderBy?: carriageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, carriageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarriageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the carriage model
   */
  readonly fields: carriageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for carriage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__carriageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    train<T extends trainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, trainDefaultArgs<ExtArgs>>): Prisma__trainClient<$Result.GetResult<Prisma.$trainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seat<T extends carriage$seatArgs<ExtArgs> = {}>(args?: Subset<T, carriage$seatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the carriage model
   */
  interface carriageFieldRefs {
    readonly id_carriage: FieldRef<"carriage", 'Int'>
    readonly carriage_name: FieldRef<"carriage", 'String'>
    readonly quota: FieldRef<"carriage", 'Int'>
    readonly carriage_category: FieldRef<"carriage", 'carriage_category'>
    readonly id_train: FieldRef<"carriage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * carriage findUnique
   */
  export type carriageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carriage
     */
    select?: carriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carriage
     */
    omit?: carriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carriageInclude<ExtArgs> | null
    /**
     * Filter, which carriage to fetch.
     */
    where: carriageWhereUniqueInput
  }

  /**
   * carriage findUniqueOrThrow
   */
  export type carriageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carriage
     */
    select?: carriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carriage
     */
    omit?: carriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carriageInclude<ExtArgs> | null
    /**
     * Filter, which carriage to fetch.
     */
    where: carriageWhereUniqueInput
  }

  /**
   * carriage findFirst
   */
  export type carriageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carriage
     */
    select?: carriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carriage
     */
    omit?: carriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carriageInclude<ExtArgs> | null
    /**
     * Filter, which carriage to fetch.
     */
    where?: carriageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carriages to fetch.
     */
    orderBy?: carriageOrderByWithRelationInput | carriageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carriages.
     */
    cursor?: carriageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carriages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carriages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carriages.
     */
    distinct?: CarriageScalarFieldEnum | CarriageScalarFieldEnum[]
  }

  /**
   * carriage findFirstOrThrow
   */
  export type carriageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carriage
     */
    select?: carriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carriage
     */
    omit?: carriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carriageInclude<ExtArgs> | null
    /**
     * Filter, which carriage to fetch.
     */
    where?: carriageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carriages to fetch.
     */
    orderBy?: carriageOrderByWithRelationInput | carriageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carriages.
     */
    cursor?: carriageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carriages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carriages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carriages.
     */
    distinct?: CarriageScalarFieldEnum | CarriageScalarFieldEnum[]
  }

  /**
   * carriage findMany
   */
  export type carriageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carriage
     */
    select?: carriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carriage
     */
    omit?: carriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carriageInclude<ExtArgs> | null
    /**
     * Filter, which carriages to fetch.
     */
    where?: carriageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carriages to fetch.
     */
    orderBy?: carriageOrderByWithRelationInput | carriageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carriages.
     */
    cursor?: carriageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carriages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carriages.
     */
    skip?: number
    distinct?: CarriageScalarFieldEnum | CarriageScalarFieldEnum[]
  }

  /**
   * carriage create
   */
  export type carriageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carriage
     */
    select?: carriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carriage
     */
    omit?: carriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carriageInclude<ExtArgs> | null
    /**
     * The data needed to create a carriage.
     */
    data: XOR<carriageCreateInput, carriageUncheckedCreateInput>
  }

  /**
   * carriage createMany
   */
  export type carriageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carriages.
     */
    data: carriageCreateManyInput | carriageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * carriage update
   */
  export type carriageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carriage
     */
    select?: carriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carriage
     */
    omit?: carriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carriageInclude<ExtArgs> | null
    /**
     * The data needed to update a carriage.
     */
    data: XOR<carriageUpdateInput, carriageUncheckedUpdateInput>
    /**
     * Choose, which carriage to update.
     */
    where: carriageWhereUniqueInput
  }

  /**
   * carriage updateMany
   */
  export type carriageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carriages.
     */
    data: XOR<carriageUpdateManyMutationInput, carriageUncheckedUpdateManyInput>
    /**
     * Filter which carriages to update
     */
    where?: carriageWhereInput
    /**
     * Limit how many carriages to update.
     */
    limit?: number
  }

  /**
   * carriage upsert
   */
  export type carriageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carriage
     */
    select?: carriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carriage
     */
    omit?: carriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carriageInclude<ExtArgs> | null
    /**
     * The filter to search for the carriage to update in case it exists.
     */
    where: carriageWhereUniqueInput
    /**
     * In case the carriage found by the `where` argument doesn't exist, create a new carriage with this data.
     */
    create: XOR<carriageCreateInput, carriageUncheckedCreateInput>
    /**
     * In case the carriage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<carriageUpdateInput, carriageUncheckedUpdateInput>
  }

  /**
   * carriage delete
   */
  export type carriageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carriage
     */
    select?: carriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carriage
     */
    omit?: carriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carriageInclude<ExtArgs> | null
    /**
     * Filter which carriage to delete.
     */
    where: carriageWhereUniqueInput
  }

  /**
   * carriage deleteMany
   */
  export type carriageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carriages to delete
     */
    where?: carriageWhereInput
    /**
     * Limit how many carriages to delete.
     */
    limit?: number
  }

  /**
   * carriage.seat
   */
  export type carriage$seatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat
     */
    select?: seatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat
     */
    omit?: seatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatInclude<ExtArgs> | null
    where?: seatWhereInput
    orderBy?: seatOrderByWithRelationInput | seatOrderByWithRelationInput[]
    cursor?: seatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * carriage without action
   */
  export type carriageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carriage
     */
    select?: carriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carriage
     */
    omit?: carriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carriageInclude<ExtArgs> | null
  }


  /**
   * Model schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleAvgAggregateOutputType = {
    id_schedule: number | null
    price: number | null
    quota_total: number | null
    id_train: number | null
  }

  export type ScheduleSumAggregateOutputType = {
    id_schedule: number | null
    price: number | null
    quota_total: number | null
    id_train: number | null
  }

  export type ScheduleMinAggregateOutputType = {
    id_schedule: number | null
    schedule_name: string | null
    departure: string | null
    destination: string | null
    departure_date: Date | null
    arrival_date: Date | null
    price: number | null
    quota_total: number | null
    status: $Enums.status | null
    id_train: number | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id_schedule: number | null
    schedule_name: string | null
    departure: string | null
    destination: string | null
    departure_date: Date | null
    arrival_date: Date | null
    price: number | null
    quota_total: number | null
    status: $Enums.status | null
    id_train: number | null
  }

  export type ScheduleCountAggregateOutputType = {
    id_schedule: number
    schedule_name: number
    departure: number
    destination: number
    departure_date: number
    arrival_date: number
    price: number
    quota_total: number
    status: number
    id_train: number
    _all: number
  }


  export type ScheduleAvgAggregateInputType = {
    id_schedule?: true
    price?: true
    quota_total?: true
    id_train?: true
  }

  export type ScheduleSumAggregateInputType = {
    id_schedule?: true
    price?: true
    quota_total?: true
    id_train?: true
  }

  export type ScheduleMinAggregateInputType = {
    id_schedule?: true
    schedule_name?: true
    departure?: true
    destination?: true
    departure_date?: true
    arrival_date?: true
    price?: true
    quota_total?: true
    status?: true
    id_train?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id_schedule?: true
    schedule_name?: true
    departure?: true
    destination?: true
    departure_date?: true
    arrival_date?: true
    price?: true
    quota_total?: true
    status?: true
    id_train?: true
  }

  export type ScheduleCountAggregateInputType = {
    id_schedule?: true
    schedule_name?: true
    departure?: true
    destination?: true
    departure_date?: true
    arrival_date?: true
    price?: true
    quota_total?: true
    status?: true
    id_train?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schedule to aggregate.
     */
    where?: scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type scheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: scheduleWhereInput
    orderBy?: scheduleOrderByWithAggregationInput | scheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: scheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _avg?: ScheduleAvgAggregateInputType
    _sum?: ScheduleSumAggregateInputType
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id_schedule: number
    schedule_name: string
    departure: string
    destination: string
    departure_date: Date
    arrival_date: Date
    price: number
    quota_total: number
    status: $Enums.status
    id_train: number
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends scheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type scheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_schedule?: boolean
    schedule_name?: boolean
    departure?: boolean
    destination?: boolean
    departure_date?: boolean
    arrival_date?: boolean
    price?: boolean
    quota_total?: boolean
    status?: boolean
    id_train?: boolean
    train?: boolean | trainDefaultArgs<ExtArgs>
    seat_schedule?: boolean | schedule$seat_scheduleArgs<ExtArgs>
    ticket_purchase?: boolean | schedule$ticket_purchaseArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>



  export type scheduleSelectScalar = {
    id_schedule?: boolean
    schedule_name?: boolean
    departure?: boolean
    destination?: boolean
    departure_date?: boolean
    arrival_date?: boolean
    price?: boolean
    quota_total?: boolean
    status?: boolean
    id_train?: boolean
  }

  export type scheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_schedule" | "schedule_name" | "departure" | "destination" | "departure_date" | "arrival_date" | "price" | "quota_total" | "status" | "id_train", ExtArgs["result"]["schedule"]>
  export type scheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    train?: boolean | trainDefaultArgs<ExtArgs>
    seat_schedule?: boolean | schedule$seat_scheduleArgs<ExtArgs>
    ticket_purchase?: boolean | schedule$ticket_purchaseArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $schedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "schedule"
    objects: {
      train: Prisma.$trainPayload<ExtArgs>
      seat_schedule: Prisma.$seat_schedulePayload<ExtArgs>[]
      ticket_purchase: Prisma.$ticket_purchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_schedule: number
      schedule_name: string
      departure: string
      destination: string
      departure_date: Date
      arrival_date: Date
      price: number
      quota_total: number
      status: $Enums.status
      id_train: number
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type scheduleGetPayload<S extends boolean | null | undefined | scheduleDefaultArgs> = $Result.GetResult<Prisma.$schedulePayload, S>

  type scheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<scheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface scheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['schedule'], meta: { name: 'schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {scheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends scheduleFindUniqueArgs>(args: SelectSubset<T, scheduleFindUniqueArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {scheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends scheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, scheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends scheduleFindFirstArgs>(args?: SelectSubset<T, scheduleFindFirstArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends scheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, scheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id_schedule`
     * const scheduleWithId_scheduleOnly = await prisma.schedule.findMany({ select: { id_schedule: true } })
     * 
     */
    findMany<T extends scheduleFindManyArgs>(args?: SelectSubset<T, scheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {scheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends scheduleCreateArgs>(args: SelectSubset<T, scheduleCreateArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {scheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends scheduleCreateManyArgs>(args?: SelectSubset<T, scheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Schedule.
     * @param {scheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends scheduleDeleteArgs>(args: SelectSubset<T, scheduleDeleteArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {scheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends scheduleUpdateArgs>(args: SelectSubset<T, scheduleUpdateArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {scheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends scheduleDeleteManyArgs>(args?: SelectSubset<T, scheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends scheduleUpdateManyArgs>(args: SelectSubset<T, scheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Schedule.
     * @param {scheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends scheduleUpsertArgs>(args: SelectSubset<T, scheduleUpsertArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends scheduleCountArgs>(
      args?: Subset<T, scheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends scheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: scheduleGroupByArgs['orderBy'] }
        : { orderBy?: scheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, scheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the schedule model
   */
  readonly fields: scheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__scheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    train<T extends trainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, trainDefaultArgs<ExtArgs>>): Prisma__trainClient<$Result.GetResult<Prisma.$trainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seat_schedule<T extends schedule$seat_scheduleArgs<ExtArgs> = {}>(args?: Subset<T, schedule$seat_scheduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seat_schedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ticket_purchase<T extends schedule$ticket_purchaseArgs<ExtArgs> = {}>(args?: Subset<T, schedule$ticket_purchaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticket_purchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the schedule model
   */
  interface scheduleFieldRefs {
    readonly id_schedule: FieldRef<"schedule", 'Int'>
    readonly schedule_name: FieldRef<"schedule", 'String'>
    readonly departure: FieldRef<"schedule", 'String'>
    readonly destination: FieldRef<"schedule", 'String'>
    readonly departure_date: FieldRef<"schedule", 'DateTime'>
    readonly arrival_date: FieldRef<"schedule", 'DateTime'>
    readonly price: FieldRef<"schedule", 'Float'>
    readonly quota_total: FieldRef<"schedule", 'Int'>
    readonly status: FieldRef<"schedule", 'status'>
    readonly id_train: FieldRef<"schedule", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * schedule findUnique
   */
  export type scheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * Filter, which schedule to fetch.
     */
    where: scheduleWhereUniqueInput
  }

  /**
   * schedule findUniqueOrThrow
   */
  export type scheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * Filter, which schedule to fetch.
     */
    where: scheduleWhereUniqueInput
  }

  /**
   * schedule findFirst
   */
  export type scheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * Filter, which schedule to fetch.
     */
    where?: scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schedules.
     */
    cursor?: scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * schedule findFirstOrThrow
   */
  export type scheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * Filter, which schedule to fetch.
     */
    where?: scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schedules.
     */
    cursor?: scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * schedule findMany
   */
  export type scheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where?: scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing schedules.
     */
    cursor?: scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * schedule create
   */
  export type scheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a schedule.
     */
    data: XOR<scheduleCreateInput, scheduleUncheckedCreateInput>
  }

  /**
   * schedule createMany
   */
  export type scheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many schedules.
     */
    data: scheduleCreateManyInput | scheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * schedule update
   */
  export type scheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a schedule.
     */
    data: XOR<scheduleUpdateInput, scheduleUncheckedUpdateInput>
    /**
     * Choose, which schedule to update.
     */
    where: scheduleWhereUniqueInput
  }

  /**
   * schedule updateMany
   */
  export type scheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update schedules.
     */
    data: XOR<scheduleUpdateManyMutationInput, scheduleUncheckedUpdateManyInput>
    /**
     * Filter which schedules to update
     */
    where?: scheduleWhereInput
    /**
     * Limit how many schedules to update.
     */
    limit?: number
  }

  /**
   * schedule upsert
   */
  export type scheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the schedule to update in case it exists.
     */
    where: scheduleWhereUniqueInput
    /**
     * In case the schedule found by the `where` argument doesn't exist, create a new schedule with this data.
     */
    create: XOR<scheduleCreateInput, scheduleUncheckedCreateInput>
    /**
     * In case the schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<scheduleUpdateInput, scheduleUncheckedUpdateInput>
  }

  /**
   * schedule delete
   */
  export type scheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * Filter which schedule to delete.
     */
    where: scheduleWhereUniqueInput
  }

  /**
   * schedule deleteMany
   */
  export type scheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schedules to delete
     */
    where?: scheduleWhereInput
    /**
     * Limit how many schedules to delete.
     */
    limit?: number
  }

  /**
   * schedule.seat_schedule
   */
  export type schedule$seat_scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat_schedule
     */
    select?: seat_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat_schedule
     */
    omit?: seat_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seat_scheduleInclude<ExtArgs> | null
    where?: seat_scheduleWhereInput
    orderBy?: seat_scheduleOrderByWithRelationInput | seat_scheduleOrderByWithRelationInput[]
    cursor?: seat_scheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Seat_scheduleScalarFieldEnum | Seat_scheduleScalarFieldEnum[]
  }

  /**
   * schedule.ticket_purchase
   */
  export type schedule$ticket_purchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_purchase
     */
    select?: ticket_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket_purchase
     */
    omit?: ticket_purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_purchaseInclude<ExtArgs> | null
    where?: ticket_purchaseWhereInput
    orderBy?: ticket_purchaseOrderByWithRelationInput | ticket_purchaseOrderByWithRelationInput[]
    cursor?: ticket_purchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ticket_purchaseScalarFieldEnum | Ticket_purchaseScalarFieldEnum[]
  }

  /**
   * schedule without action
   */
  export type scheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
  }


  /**
   * Model seat
   */

  export type AggregateSeat = {
    _count: SeatCountAggregateOutputType | null
    _avg: SeatAvgAggregateOutputType | null
    _sum: SeatSumAggregateOutputType | null
    _min: SeatMinAggregateOutputType | null
    _max: SeatMaxAggregateOutputType | null
  }

  export type SeatAvgAggregateOutputType = {
    id_seat: number | null
    id_carriage: number | null
  }

  export type SeatSumAggregateOutputType = {
    id_seat: number | null
    id_carriage: number | null
  }

  export type SeatMinAggregateOutputType = {
    id_seat: number | null
    seat_num: string | null
    id_carriage: number | null
  }

  export type SeatMaxAggregateOutputType = {
    id_seat: number | null
    seat_num: string | null
    id_carriage: number | null
  }

  export type SeatCountAggregateOutputType = {
    id_seat: number
    seat_num: number
    id_carriage: number
    _all: number
  }


  export type SeatAvgAggregateInputType = {
    id_seat?: true
    id_carriage?: true
  }

  export type SeatSumAggregateInputType = {
    id_seat?: true
    id_carriage?: true
  }

  export type SeatMinAggregateInputType = {
    id_seat?: true
    seat_num?: true
    id_carriage?: true
  }

  export type SeatMaxAggregateInputType = {
    id_seat?: true
    seat_num?: true
    id_carriage?: true
  }

  export type SeatCountAggregateInputType = {
    id_seat?: true
    seat_num?: true
    id_carriage?: true
    _all?: true
  }

  export type SeatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which seat to aggregate.
     */
    where?: seatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seats to fetch.
     */
    orderBy?: seatOrderByWithRelationInput | seatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: seatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned seats
    **/
    _count?: true | SeatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeatMaxAggregateInputType
  }

  export type GetSeatAggregateType<T extends SeatAggregateArgs> = {
        [P in keyof T & keyof AggregateSeat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeat[P]>
      : GetScalarType<T[P], AggregateSeat[P]>
  }




  export type seatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: seatWhereInput
    orderBy?: seatOrderByWithAggregationInput | seatOrderByWithAggregationInput[]
    by: SeatScalarFieldEnum[] | SeatScalarFieldEnum
    having?: seatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeatCountAggregateInputType | true
    _avg?: SeatAvgAggregateInputType
    _sum?: SeatSumAggregateInputType
    _min?: SeatMinAggregateInputType
    _max?: SeatMaxAggregateInputType
  }

  export type SeatGroupByOutputType = {
    id_seat: number
    seat_num: string
    id_carriage: number
    _count: SeatCountAggregateOutputType | null
    _avg: SeatAvgAggregateOutputType | null
    _sum: SeatSumAggregateOutputType | null
    _min: SeatMinAggregateOutputType | null
    _max: SeatMaxAggregateOutputType | null
  }

  type GetSeatGroupByPayload<T extends seatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeatGroupByOutputType[P]>
            : GetScalarType<T[P], SeatGroupByOutputType[P]>
        }
      >
    >


  export type seatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_seat?: boolean
    seat_num?: boolean
    id_carriage?: boolean
    purchase_detail?: boolean | seat$purchase_detailArgs<ExtArgs>
    carriage?: boolean | carriageDefaultArgs<ExtArgs>
    seat_schedule?: boolean | seat$seat_scheduleArgs<ExtArgs>
    _count?: boolean | SeatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seat"]>



  export type seatSelectScalar = {
    id_seat?: boolean
    seat_num?: boolean
    id_carriage?: boolean
  }

  export type seatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_seat" | "seat_num" | "id_carriage", ExtArgs["result"]["seat"]>
  export type seatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase_detail?: boolean | seat$purchase_detailArgs<ExtArgs>
    carriage?: boolean | carriageDefaultArgs<ExtArgs>
    seat_schedule?: boolean | seat$seat_scheduleArgs<ExtArgs>
    _count?: boolean | SeatCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $seatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "seat"
    objects: {
      purchase_detail: Prisma.$purchase_detailPayload<ExtArgs>[]
      carriage: Prisma.$carriagePayload<ExtArgs>
      seat_schedule: Prisma.$seat_schedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_seat: number
      seat_num: string
      id_carriage: number
    }, ExtArgs["result"]["seat"]>
    composites: {}
  }

  type seatGetPayload<S extends boolean | null | undefined | seatDefaultArgs> = $Result.GetResult<Prisma.$seatPayload, S>

  type seatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<seatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeatCountAggregateInputType | true
    }

  export interface seatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['seat'], meta: { name: 'seat' } }
    /**
     * Find zero or one Seat that matches the filter.
     * @param {seatFindUniqueArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends seatFindUniqueArgs>(args: SelectSubset<T, seatFindUniqueArgs<ExtArgs>>): Prisma__seatClient<$Result.GetResult<Prisma.$seatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {seatFindUniqueOrThrowArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends seatFindUniqueOrThrowArgs>(args: SelectSubset<T, seatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__seatClient<$Result.GetResult<Prisma.$seatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seatFindFirstArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends seatFindFirstArgs>(args?: SelectSubset<T, seatFindFirstArgs<ExtArgs>>): Prisma__seatClient<$Result.GetResult<Prisma.$seatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seatFindFirstOrThrowArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends seatFindFirstOrThrowArgs>(args?: SelectSubset<T, seatFindFirstOrThrowArgs<ExtArgs>>): Prisma__seatClient<$Result.GetResult<Prisma.$seatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seats
     * const seats = await prisma.seat.findMany()
     * 
     * // Get first 10 Seats
     * const seats = await prisma.seat.findMany({ take: 10 })
     * 
     * // Only select the `id_seat`
     * const seatWithId_seatOnly = await prisma.seat.findMany({ select: { id_seat: true } })
     * 
     */
    findMany<T extends seatFindManyArgs>(args?: SelectSubset<T, seatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seat.
     * @param {seatCreateArgs} args - Arguments to create a Seat.
     * @example
     * // Create one Seat
     * const Seat = await prisma.seat.create({
     *   data: {
     *     // ... data to create a Seat
     *   }
     * })
     * 
     */
    create<T extends seatCreateArgs>(args: SelectSubset<T, seatCreateArgs<ExtArgs>>): Prisma__seatClient<$Result.GetResult<Prisma.$seatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seats.
     * @param {seatCreateManyArgs} args - Arguments to create many Seats.
     * @example
     * // Create many Seats
     * const seat = await prisma.seat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends seatCreateManyArgs>(args?: SelectSubset<T, seatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Seat.
     * @param {seatDeleteArgs} args - Arguments to delete one Seat.
     * @example
     * // Delete one Seat
     * const Seat = await prisma.seat.delete({
     *   where: {
     *     // ... filter to delete one Seat
     *   }
     * })
     * 
     */
    delete<T extends seatDeleteArgs>(args: SelectSubset<T, seatDeleteArgs<ExtArgs>>): Prisma__seatClient<$Result.GetResult<Prisma.$seatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seat.
     * @param {seatUpdateArgs} args - Arguments to update one Seat.
     * @example
     * // Update one Seat
     * const seat = await prisma.seat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends seatUpdateArgs>(args: SelectSubset<T, seatUpdateArgs<ExtArgs>>): Prisma__seatClient<$Result.GetResult<Prisma.$seatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seats.
     * @param {seatDeleteManyArgs} args - Arguments to filter Seats to delete.
     * @example
     * // Delete a few Seats
     * const { count } = await prisma.seat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends seatDeleteManyArgs>(args?: SelectSubset<T, seatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seats
     * const seat = await prisma.seat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends seatUpdateManyArgs>(args: SelectSubset<T, seatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Seat.
     * @param {seatUpsertArgs} args - Arguments to update or create a Seat.
     * @example
     * // Update or create a Seat
     * const seat = await prisma.seat.upsert({
     *   create: {
     *     // ... data to create a Seat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seat we want to update
     *   }
     * })
     */
    upsert<T extends seatUpsertArgs>(args: SelectSubset<T, seatUpsertArgs<ExtArgs>>): Prisma__seatClient<$Result.GetResult<Prisma.$seatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seatCountArgs} args - Arguments to filter Seats to count.
     * @example
     * // Count the number of Seats
     * const count = await prisma.seat.count({
     *   where: {
     *     // ... the filter for the Seats we want to count
     *   }
     * })
    **/
    count<T extends seatCountArgs>(
      args?: Subset<T, seatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeatAggregateArgs>(args: Subset<T, SeatAggregateArgs>): Prisma.PrismaPromise<GetSeatAggregateType<T>>

    /**
     * Group by Seat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends seatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: seatGroupByArgs['orderBy'] }
        : { orderBy?: seatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, seatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the seat model
   */
  readonly fields: seatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for seat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__seatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchase_detail<T extends seat$purchase_detailArgs<ExtArgs> = {}>(args?: Subset<T, seat$purchase_detailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchase_detailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    carriage<T extends carriageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, carriageDefaultArgs<ExtArgs>>): Prisma__carriageClient<$Result.GetResult<Prisma.$carriagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seat_schedule<T extends seat$seat_scheduleArgs<ExtArgs> = {}>(args?: Subset<T, seat$seat_scheduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seat_schedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the seat model
   */
  interface seatFieldRefs {
    readonly id_seat: FieldRef<"seat", 'Int'>
    readonly seat_num: FieldRef<"seat", 'String'>
    readonly id_carriage: FieldRef<"seat", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * seat findUnique
   */
  export type seatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat
     */
    select?: seatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat
     */
    omit?: seatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatInclude<ExtArgs> | null
    /**
     * Filter, which seat to fetch.
     */
    where: seatWhereUniqueInput
  }

  /**
   * seat findUniqueOrThrow
   */
  export type seatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat
     */
    select?: seatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat
     */
    omit?: seatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatInclude<ExtArgs> | null
    /**
     * Filter, which seat to fetch.
     */
    where: seatWhereUniqueInput
  }

  /**
   * seat findFirst
   */
  export type seatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat
     */
    select?: seatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat
     */
    omit?: seatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatInclude<ExtArgs> | null
    /**
     * Filter, which seat to fetch.
     */
    where?: seatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seats to fetch.
     */
    orderBy?: seatOrderByWithRelationInput | seatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for seats.
     */
    cursor?: seatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of seats.
     */
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * seat findFirstOrThrow
   */
  export type seatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat
     */
    select?: seatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat
     */
    omit?: seatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatInclude<ExtArgs> | null
    /**
     * Filter, which seat to fetch.
     */
    where?: seatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seats to fetch.
     */
    orderBy?: seatOrderByWithRelationInput | seatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for seats.
     */
    cursor?: seatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of seats.
     */
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * seat findMany
   */
  export type seatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat
     */
    select?: seatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat
     */
    omit?: seatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatInclude<ExtArgs> | null
    /**
     * Filter, which seats to fetch.
     */
    where?: seatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seats to fetch.
     */
    orderBy?: seatOrderByWithRelationInput | seatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing seats.
     */
    cursor?: seatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seats.
     */
    skip?: number
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * seat create
   */
  export type seatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat
     */
    select?: seatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat
     */
    omit?: seatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatInclude<ExtArgs> | null
    /**
     * The data needed to create a seat.
     */
    data: XOR<seatCreateInput, seatUncheckedCreateInput>
  }

  /**
   * seat createMany
   */
  export type seatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many seats.
     */
    data: seatCreateManyInput | seatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * seat update
   */
  export type seatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat
     */
    select?: seatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat
     */
    omit?: seatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatInclude<ExtArgs> | null
    /**
     * The data needed to update a seat.
     */
    data: XOR<seatUpdateInput, seatUncheckedUpdateInput>
    /**
     * Choose, which seat to update.
     */
    where: seatWhereUniqueInput
  }

  /**
   * seat updateMany
   */
  export type seatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update seats.
     */
    data: XOR<seatUpdateManyMutationInput, seatUncheckedUpdateManyInput>
    /**
     * Filter which seats to update
     */
    where?: seatWhereInput
    /**
     * Limit how many seats to update.
     */
    limit?: number
  }

  /**
   * seat upsert
   */
  export type seatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat
     */
    select?: seatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat
     */
    omit?: seatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatInclude<ExtArgs> | null
    /**
     * The filter to search for the seat to update in case it exists.
     */
    where: seatWhereUniqueInput
    /**
     * In case the seat found by the `where` argument doesn't exist, create a new seat with this data.
     */
    create: XOR<seatCreateInput, seatUncheckedCreateInput>
    /**
     * In case the seat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<seatUpdateInput, seatUncheckedUpdateInput>
  }

  /**
   * seat delete
   */
  export type seatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat
     */
    select?: seatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat
     */
    omit?: seatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatInclude<ExtArgs> | null
    /**
     * Filter which seat to delete.
     */
    where: seatWhereUniqueInput
  }

  /**
   * seat deleteMany
   */
  export type seatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which seats to delete
     */
    where?: seatWhereInput
    /**
     * Limit how many seats to delete.
     */
    limit?: number
  }

  /**
   * seat.purchase_detail
   */
  export type seat$purchase_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_detail
     */
    select?: purchase_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_detail
     */
    omit?: purchase_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_detailInclude<ExtArgs> | null
    where?: purchase_detailWhereInput
    orderBy?: purchase_detailOrderByWithRelationInput | purchase_detailOrderByWithRelationInput[]
    cursor?: purchase_detailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Purchase_detailScalarFieldEnum | Purchase_detailScalarFieldEnum[]
  }

  /**
   * seat.seat_schedule
   */
  export type seat$seat_scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat_schedule
     */
    select?: seat_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat_schedule
     */
    omit?: seat_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seat_scheduleInclude<ExtArgs> | null
    where?: seat_scheduleWhereInput
    orderBy?: seat_scheduleOrderByWithRelationInput | seat_scheduleOrderByWithRelationInput[]
    cursor?: seat_scheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Seat_scheduleScalarFieldEnum | Seat_scheduleScalarFieldEnum[]
  }

  /**
   * seat without action
   */
  export type seatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat
     */
    select?: seatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat
     */
    omit?: seatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatInclude<ExtArgs> | null
  }


  /**
   * Model seat_schedule
   */

  export type AggregateSeat_schedule = {
    _count: Seat_scheduleCountAggregateOutputType | null
    _avg: Seat_scheduleAvgAggregateOutputType | null
    _sum: Seat_scheduleSumAggregateOutputType | null
    _min: Seat_scheduleMinAggregateOutputType | null
    _max: Seat_scheduleMaxAggregateOutputType | null
  }

  export type Seat_scheduleAvgAggregateOutputType = {
    id_seat_schedule: number | null
    id_seat: number | null
    id_schedule: number | null
    purchaseDetailId_purchasedetail: number | null
  }

  export type Seat_scheduleSumAggregateOutputType = {
    id_seat_schedule: number | null
    id_seat: number | null
    id_schedule: number | null
    purchaseDetailId_purchasedetail: number | null
  }

  export type Seat_scheduleMinAggregateOutputType = {
    id_seat_schedule: number | null
    id_seat: number | null
    id_schedule: number | null
    seatschedule_status: $Enums.seatschedule_status | null
    purchaseDetailId_purchasedetail: number | null
  }

  export type Seat_scheduleMaxAggregateOutputType = {
    id_seat_schedule: number | null
    id_seat: number | null
    id_schedule: number | null
    seatschedule_status: $Enums.seatschedule_status | null
    purchaseDetailId_purchasedetail: number | null
  }

  export type Seat_scheduleCountAggregateOutputType = {
    id_seat_schedule: number
    id_seat: number
    id_schedule: number
    seatschedule_status: number
    purchaseDetailId_purchasedetail: number
    _all: number
  }


  export type Seat_scheduleAvgAggregateInputType = {
    id_seat_schedule?: true
    id_seat?: true
    id_schedule?: true
    purchaseDetailId_purchasedetail?: true
  }

  export type Seat_scheduleSumAggregateInputType = {
    id_seat_schedule?: true
    id_seat?: true
    id_schedule?: true
    purchaseDetailId_purchasedetail?: true
  }

  export type Seat_scheduleMinAggregateInputType = {
    id_seat_schedule?: true
    id_seat?: true
    id_schedule?: true
    seatschedule_status?: true
    purchaseDetailId_purchasedetail?: true
  }

  export type Seat_scheduleMaxAggregateInputType = {
    id_seat_schedule?: true
    id_seat?: true
    id_schedule?: true
    seatschedule_status?: true
    purchaseDetailId_purchasedetail?: true
  }

  export type Seat_scheduleCountAggregateInputType = {
    id_seat_schedule?: true
    id_seat?: true
    id_schedule?: true
    seatschedule_status?: true
    purchaseDetailId_purchasedetail?: true
    _all?: true
  }

  export type Seat_scheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which seat_schedule to aggregate.
     */
    where?: seat_scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seat_schedules to fetch.
     */
    orderBy?: seat_scheduleOrderByWithRelationInput | seat_scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: seat_scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seat_schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seat_schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned seat_schedules
    **/
    _count?: true | Seat_scheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Seat_scheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Seat_scheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Seat_scheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Seat_scheduleMaxAggregateInputType
  }

  export type GetSeat_scheduleAggregateType<T extends Seat_scheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSeat_schedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeat_schedule[P]>
      : GetScalarType<T[P], AggregateSeat_schedule[P]>
  }




  export type seat_scheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: seat_scheduleWhereInput
    orderBy?: seat_scheduleOrderByWithAggregationInput | seat_scheduleOrderByWithAggregationInput[]
    by: Seat_scheduleScalarFieldEnum[] | Seat_scheduleScalarFieldEnum
    having?: seat_scheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Seat_scheduleCountAggregateInputType | true
    _avg?: Seat_scheduleAvgAggregateInputType
    _sum?: Seat_scheduleSumAggregateInputType
    _min?: Seat_scheduleMinAggregateInputType
    _max?: Seat_scheduleMaxAggregateInputType
  }

  export type Seat_scheduleGroupByOutputType = {
    id_seat_schedule: number
    id_seat: number
    id_schedule: number
    seatschedule_status: $Enums.seatschedule_status
    purchaseDetailId_purchasedetail: number | null
    _count: Seat_scheduleCountAggregateOutputType | null
    _avg: Seat_scheduleAvgAggregateOutputType | null
    _sum: Seat_scheduleSumAggregateOutputType | null
    _min: Seat_scheduleMinAggregateOutputType | null
    _max: Seat_scheduleMaxAggregateOutputType | null
  }

  type GetSeat_scheduleGroupByPayload<T extends seat_scheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Seat_scheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Seat_scheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Seat_scheduleGroupByOutputType[P]>
            : GetScalarType<T[P], Seat_scheduleGroupByOutputType[P]>
        }
      >
    >


  export type seat_scheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_seat_schedule?: boolean
    id_seat?: boolean
    id_schedule?: boolean
    seatschedule_status?: boolean
    purchaseDetailId_purchasedetail?: boolean
    purchase_detail?: boolean | seat_schedule$purchase_detailArgs<ExtArgs>
    schedule?: boolean | scheduleDefaultArgs<ExtArgs>
    seat?: boolean | seatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seat_schedule"]>



  export type seat_scheduleSelectScalar = {
    id_seat_schedule?: boolean
    id_seat?: boolean
    id_schedule?: boolean
    seatschedule_status?: boolean
    purchaseDetailId_purchasedetail?: boolean
  }

  export type seat_scheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_seat_schedule" | "id_seat" | "id_schedule" | "seatschedule_status" | "purchaseDetailId_purchasedetail", ExtArgs["result"]["seat_schedule"]>
  export type seat_scheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase_detail?: boolean | seat_schedule$purchase_detailArgs<ExtArgs>
    schedule?: boolean | scheduleDefaultArgs<ExtArgs>
    seat?: boolean | seatDefaultArgs<ExtArgs>
  }

  export type $seat_schedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "seat_schedule"
    objects: {
      purchase_detail: Prisma.$purchase_detailPayload<ExtArgs> | null
      schedule: Prisma.$schedulePayload<ExtArgs>
      seat: Prisma.$seatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_seat_schedule: number
      id_seat: number
      id_schedule: number
      seatschedule_status: $Enums.seatschedule_status
      purchaseDetailId_purchasedetail: number | null
    }, ExtArgs["result"]["seat_schedule"]>
    composites: {}
  }

  type seat_scheduleGetPayload<S extends boolean | null | undefined | seat_scheduleDefaultArgs> = $Result.GetResult<Prisma.$seat_schedulePayload, S>

  type seat_scheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<seat_scheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Seat_scheduleCountAggregateInputType | true
    }

  export interface seat_scheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['seat_schedule'], meta: { name: 'seat_schedule' } }
    /**
     * Find zero or one Seat_schedule that matches the filter.
     * @param {seat_scheduleFindUniqueArgs} args - Arguments to find a Seat_schedule
     * @example
     * // Get one Seat_schedule
     * const seat_schedule = await prisma.seat_schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends seat_scheduleFindUniqueArgs>(args: SelectSubset<T, seat_scheduleFindUniqueArgs<ExtArgs>>): Prisma__seat_scheduleClient<$Result.GetResult<Prisma.$seat_schedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seat_schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {seat_scheduleFindUniqueOrThrowArgs} args - Arguments to find a Seat_schedule
     * @example
     * // Get one Seat_schedule
     * const seat_schedule = await prisma.seat_schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends seat_scheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, seat_scheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__seat_scheduleClient<$Result.GetResult<Prisma.$seat_schedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seat_schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seat_scheduleFindFirstArgs} args - Arguments to find a Seat_schedule
     * @example
     * // Get one Seat_schedule
     * const seat_schedule = await prisma.seat_schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends seat_scheduleFindFirstArgs>(args?: SelectSubset<T, seat_scheduleFindFirstArgs<ExtArgs>>): Prisma__seat_scheduleClient<$Result.GetResult<Prisma.$seat_schedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seat_schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seat_scheduleFindFirstOrThrowArgs} args - Arguments to find a Seat_schedule
     * @example
     * // Get one Seat_schedule
     * const seat_schedule = await prisma.seat_schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends seat_scheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, seat_scheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__seat_scheduleClient<$Result.GetResult<Prisma.$seat_schedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seat_schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seat_scheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seat_schedules
     * const seat_schedules = await prisma.seat_schedule.findMany()
     * 
     * // Get first 10 Seat_schedules
     * const seat_schedules = await prisma.seat_schedule.findMany({ take: 10 })
     * 
     * // Only select the `id_seat_schedule`
     * const seat_scheduleWithId_seat_scheduleOnly = await prisma.seat_schedule.findMany({ select: { id_seat_schedule: true } })
     * 
     */
    findMany<T extends seat_scheduleFindManyArgs>(args?: SelectSubset<T, seat_scheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seat_schedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seat_schedule.
     * @param {seat_scheduleCreateArgs} args - Arguments to create a Seat_schedule.
     * @example
     * // Create one Seat_schedule
     * const Seat_schedule = await prisma.seat_schedule.create({
     *   data: {
     *     // ... data to create a Seat_schedule
     *   }
     * })
     * 
     */
    create<T extends seat_scheduleCreateArgs>(args: SelectSubset<T, seat_scheduleCreateArgs<ExtArgs>>): Prisma__seat_scheduleClient<$Result.GetResult<Prisma.$seat_schedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seat_schedules.
     * @param {seat_scheduleCreateManyArgs} args - Arguments to create many Seat_schedules.
     * @example
     * // Create many Seat_schedules
     * const seat_schedule = await prisma.seat_schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends seat_scheduleCreateManyArgs>(args?: SelectSubset<T, seat_scheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Seat_schedule.
     * @param {seat_scheduleDeleteArgs} args - Arguments to delete one Seat_schedule.
     * @example
     * // Delete one Seat_schedule
     * const Seat_schedule = await prisma.seat_schedule.delete({
     *   where: {
     *     // ... filter to delete one Seat_schedule
     *   }
     * })
     * 
     */
    delete<T extends seat_scheduleDeleteArgs>(args: SelectSubset<T, seat_scheduleDeleteArgs<ExtArgs>>): Prisma__seat_scheduleClient<$Result.GetResult<Prisma.$seat_schedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seat_schedule.
     * @param {seat_scheduleUpdateArgs} args - Arguments to update one Seat_schedule.
     * @example
     * // Update one Seat_schedule
     * const seat_schedule = await prisma.seat_schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends seat_scheduleUpdateArgs>(args: SelectSubset<T, seat_scheduleUpdateArgs<ExtArgs>>): Prisma__seat_scheduleClient<$Result.GetResult<Prisma.$seat_schedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seat_schedules.
     * @param {seat_scheduleDeleteManyArgs} args - Arguments to filter Seat_schedules to delete.
     * @example
     * // Delete a few Seat_schedules
     * const { count } = await prisma.seat_schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends seat_scheduleDeleteManyArgs>(args?: SelectSubset<T, seat_scheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seat_schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seat_scheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seat_schedules
     * const seat_schedule = await prisma.seat_schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends seat_scheduleUpdateManyArgs>(args: SelectSubset<T, seat_scheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Seat_schedule.
     * @param {seat_scheduleUpsertArgs} args - Arguments to update or create a Seat_schedule.
     * @example
     * // Update or create a Seat_schedule
     * const seat_schedule = await prisma.seat_schedule.upsert({
     *   create: {
     *     // ... data to create a Seat_schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seat_schedule we want to update
     *   }
     * })
     */
    upsert<T extends seat_scheduleUpsertArgs>(args: SelectSubset<T, seat_scheduleUpsertArgs<ExtArgs>>): Prisma__seat_scheduleClient<$Result.GetResult<Prisma.$seat_schedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seat_schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seat_scheduleCountArgs} args - Arguments to filter Seat_schedules to count.
     * @example
     * // Count the number of Seat_schedules
     * const count = await prisma.seat_schedule.count({
     *   where: {
     *     // ... the filter for the Seat_schedules we want to count
     *   }
     * })
    **/
    count<T extends seat_scheduleCountArgs>(
      args?: Subset<T, seat_scheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Seat_scheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seat_schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Seat_scheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Seat_scheduleAggregateArgs>(args: Subset<T, Seat_scheduleAggregateArgs>): Prisma.PrismaPromise<GetSeat_scheduleAggregateType<T>>

    /**
     * Group by Seat_schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seat_scheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends seat_scheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: seat_scheduleGroupByArgs['orderBy'] }
        : { orderBy?: seat_scheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, seat_scheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeat_scheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the seat_schedule model
   */
  readonly fields: seat_scheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for seat_schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__seat_scheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchase_detail<T extends seat_schedule$purchase_detailArgs<ExtArgs> = {}>(args?: Subset<T, seat_schedule$purchase_detailArgs<ExtArgs>>): Prisma__purchase_detailClient<$Result.GetResult<Prisma.$purchase_detailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    schedule<T extends scheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, scheduleDefaultArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seat<T extends seatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, seatDefaultArgs<ExtArgs>>): Prisma__seatClient<$Result.GetResult<Prisma.$seatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the seat_schedule model
   */
  interface seat_scheduleFieldRefs {
    readonly id_seat_schedule: FieldRef<"seat_schedule", 'Int'>
    readonly id_seat: FieldRef<"seat_schedule", 'Int'>
    readonly id_schedule: FieldRef<"seat_schedule", 'Int'>
    readonly seatschedule_status: FieldRef<"seat_schedule", 'seatschedule_status'>
    readonly purchaseDetailId_purchasedetail: FieldRef<"seat_schedule", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * seat_schedule findUnique
   */
  export type seat_scheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat_schedule
     */
    select?: seat_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat_schedule
     */
    omit?: seat_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seat_scheduleInclude<ExtArgs> | null
    /**
     * Filter, which seat_schedule to fetch.
     */
    where: seat_scheduleWhereUniqueInput
  }

  /**
   * seat_schedule findUniqueOrThrow
   */
  export type seat_scheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat_schedule
     */
    select?: seat_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat_schedule
     */
    omit?: seat_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seat_scheduleInclude<ExtArgs> | null
    /**
     * Filter, which seat_schedule to fetch.
     */
    where: seat_scheduleWhereUniqueInput
  }

  /**
   * seat_schedule findFirst
   */
  export type seat_scheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat_schedule
     */
    select?: seat_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat_schedule
     */
    omit?: seat_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seat_scheduleInclude<ExtArgs> | null
    /**
     * Filter, which seat_schedule to fetch.
     */
    where?: seat_scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seat_schedules to fetch.
     */
    orderBy?: seat_scheduleOrderByWithRelationInput | seat_scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for seat_schedules.
     */
    cursor?: seat_scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seat_schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seat_schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of seat_schedules.
     */
    distinct?: Seat_scheduleScalarFieldEnum | Seat_scheduleScalarFieldEnum[]
  }

  /**
   * seat_schedule findFirstOrThrow
   */
  export type seat_scheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat_schedule
     */
    select?: seat_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat_schedule
     */
    omit?: seat_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seat_scheduleInclude<ExtArgs> | null
    /**
     * Filter, which seat_schedule to fetch.
     */
    where?: seat_scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seat_schedules to fetch.
     */
    orderBy?: seat_scheduleOrderByWithRelationInput | seat_scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for seat_schedules.
     */
    cursor?: seat_scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seat_schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seat_schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of seat_schedules.
     */
    distinct?: Seat_scheduleScalarFieldEnum | Seat_scheduleScalarFieldEnum[]
  }

  /**
   * seat_schedule findMany
   */
  export type seat_scheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat_schedule
     */
    select?: seat_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat_schedule
     */
    omit?: seat_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seat_scheduleInclude<ExtArgs> | null
    /**
     * Filter, which seat_schedules to fetch.
     */
    where?: seat_scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seat_schedules to fetch.
     */
    orderBy?: seat_scheduleOrderByWithRelationInput | seat_scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing seat_schedules.
     */
    cursor?: seat_scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seat_schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seat_schedules.
     */
    skip?: number
    distinct?: Seat_scheduleScalarFieldEnum | Seat_scheduleScalarFieldEnum[]
  }

  /**
   * seat_schedule create
   */
  export type seat_scheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat_schedule
     */
    select?: seat_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat_schedule
     */
    omit?: seat_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seat_scheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a seat_schedule.
     */
    data: XOR<seat_scheduleCreateInput, seat_scheduleUncheckedCreateInput>
  }

  /**
   * seat_schedule createMany
   */
  export type seat_scheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many seat_schedules.
     */
    data: seat_scheduleCreateManyInput | seat_scheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * seat_schedule update
   */
  export type seat_scheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat_schedule
     */
    select?: seat_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat_schedule
     */
    omit?: seat_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seat_scheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a seat_schedule.
     */
    data: XOR<seat_scheduleUpdateInput, seat_scheduleUncheckedUpdateInput>
    /**
     * Choose, which seat_schedule to update.
     */
    where: seat_scheduleWhereUniqueInput
  }

  /**
   * seat_schedule updateMany
   */
  export type seat_scheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update seat_schedules.
     */
    data: XOR<seat_scheduleUpdateManyMutationInput, seat_scheduleUncheckedUpdateManyInput>
    /**
     * Filter which seat_schedules to update
     */
    where?: seat_scheduleWhereInput
    /**
     * Limit how many seat_schedules to update.
     */
    limit?: number
  }

  /**
   * seat_schedule upsert
   */
  export type seat_scheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat_schedule
     */
    select?: seat_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat_schedule
     */
    omit?: seat_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seat_scheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the seat_schedule to update in case it exists.
     */
    where: seat_scheduleWhereUniqueInput
    /**
     * In case the seat_schedule found by the `where` argument doesn't exist, create a new seat_schedule with this data.
     */
    create: XOR<seat_scheduleCreateInput, seat_scheduleUncheckedCreateInput>
    /**
     * In case the seat_schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<seat_scheduleUpdateInput, seat_scheduleUncheckedUpdateInput>
  }

  /**
   * seat_schedule delete
   */
  export type seat_scheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat_schedule
     */
    select?: seat_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat_schedule
     */
    omit?: seat_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seat_scheduleInclude<ExtArgs> | null
    /**
     * Filter which seat_schedule to delete.
     */
    where: seat_scheduleWhereUniqueInput
  }

  /**
   * seat_schedule deleteMany
   */
  export type seat_scheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which seat_schedules to delete
     */
    where?: seat_scheduleWhereInput
    /**
     * Limit how many seat_schedules to delete.
     */
    limit?: number
  }

  /**
   * seat_schedule.purchase_detail
   */
  export type seat_schedule$purchase_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_detail
     */
    select?: purchase_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_detail
     */
    omit?: purchase_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_detailInclude<ExtArgs> | null
    where?: purchase_detailWhereInput
  }

  /**
   * seat_schedule without action
   */
  export type seat_scheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat_schedule
     */
    select?: seat_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat_schedule
     */
    omit?: seat_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seat_scheduleInclude<ExtArgs> | null
  }


  /**
   * Model ticket_purchase
   */

  export type AggregateTicket_purchase = {
    _count: Ticket_purchaseCountAggregateOutputType | null
    _avg: Ticket_purchaseAvgAggregateOutputType | null
    _sum: Ticket_purchaseSumAggregateOutputType | null
    _min: Ticket_purchaseMinAggregateOutputType | null
    _max: Ticket_purchaseMaxAggregateOutputType | null
  }

  export type Ticket_purchaseAvgAggregateOutputType = {
    id_ticketpurchase: number | null
    total_price: number | null
    id_schedule: number | null
    id_user: number | null
  }

  export type Ticket_purchaseSumAggregateOutputType = {
    id_ticketpurchase: number | null
    total_price: number | null
    id_schedule: number | null
    id_user: number | null
  }

  export type Ticket_purchaseMinAggregateOutputType = {
    id_ticketpurchase: number | null
    purchase_date: Date | null
    buyer_name: string | null
    buyer_email: string | null
    buyer_phone: string | null
    total_price: number | null
    id_schedule: number | null
    id_user: number | null
  }

  export type Ticket_purchaseMaxAggregateOutputType = {
    id_ticketpurchase: number | null
    purchase_date: Date | null
    buyer_name: string | null
    buyer_email: string | null
    buyer_phone: string | null
    total_price: number | null
    id_schedule: number | null
    id_user: number | null
  }

  export type Ticket_purchaseCountAggregateOutputType = {
    id_ticketpurchase: number
    purchase_date: number
    buyer_name: number
    buyer_email: number
    buyer_phone: number
    total_price: number
    id_schedule: number
    id_user: number
    _all: number
  }


  export type Ticket_purchaseAvgAggregateInputType = {
    id_ticketpurchase?: true
    total_price?: true
    id_schedule?: true
    id_user?: true
  }

  export type Ticket_purchaseSumAggregateInputType = {
    id_ticketpurchase?: true
    total_price?: true
    id_schedule?: true
    id_user?: true
  }

  export type Ticket_purchaseMinAggregateInputType = {
    id_ticketpurchase?: true
    purchase_date?: true
    buyer_name?: true
    buyer_email?: true
    buyer_phone?: true
    total_price?: true
    id_schedule?: true
    id_user?: true
  }

  export type Ticket_purchaseMaxAggregateInputType = {
    id_ticketpurchase?: true
    purchase_date?: true
    buyer_name?: true
    buyer_email?: true
    buyer_phone?: true
    total_price?: true
    id_schedule?: true
    id_user?: true
  }

  export type Ticket_purchaseCountAggregateInputType = {
    id_ticketpurchase?: true
    purchase_date?: true
    buyer_name?: true
    buyer_email?: true
    buyer_phone?: true
    total_price?: true
    id_schedule?: true
    id_user?: true
    _all?: true
  }

  export type Ticket_purchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticket_purchase to aggregate.
     */
    where?: ticket_purchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_purchases to fetch.
     */
    orderBy?: ticket_purchaseOrderByWithRelationInput | ticket_purchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ticket_purchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ticket_purchases
    **/
    _count?: true | Ticket_purchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ticket_purchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ticket_purchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ticket_purchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ticket_purchaseMaxAggregateInputType
  }

  export type GetTicket_purchaseAggregateType<T extends Ticket_purchaseAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket_purchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket_purchase[P]>
      : GetScalarType<T[P], AggregateTicket_purchase[P]>
  }




  export type ticket_purchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticket_purchaseWhereInput
    orderBy?: ticket_purchaseOrderByWithAggregationInput | ticket_purchaseOrderByWithAggregationInput[]
    by: Ticket_purchaseScalarFieldEnum[] | Ticket_purchaseScalarFieldEnum
    having?: ticket_purchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ticket_purchaseCountAggregateInputType | true
    _avg?: Ticket_purchaseAvgAggregateInputType
    _sum?: Ticket_purchaseSumAggregateInputType
    _min?: Ticket_purchaseMinAggregateInputType
    _max?: Ticket_purchaseMaxAggregateInputType
  }

  export type Ticket_purchaseGroupByOutputType = {
    id_ticketpurchase: number
    purchase_date: Date
    buyer_name: string
    buyer_email: string
    buyer_phone: string
    total_price: number
    id_schedule: number
    id_user: number | null
    _count: Ticket_purchaseCountAggregateOutputType | null
    _avg: Ticket_purchaseAvgAggregateOutputType | null
    _sum: Ticket_purchaseSumAggregateOutputType | null
    _min: Ticket_purchaseMinAggregateOutputType | null
    _max: Ticket_purchaseMaxAggregateOutputType | null
  }

  type GetTicket_purchaseGroupByPayload<T extends ticket_purchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ticket_purchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ticket_purchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ticket_purchaseGroupByOutputType[P]>
            : GetScalarType<T[P], Ticket_purchaseGroupByOutputType[P]>
        }
      >
    >


  export type ticket_purchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ticketpurchase?: boolean
    purchase_date?: boolean
    buyer_name?: boolean
    buyer_email?: boolean
    buyer_phone?: boolean
    total_price?: boolean
    id_schedule?: boolean
    id_user?: boolean
    purchase_detail?: boolean | ticket_purchase$purchase_detailArgs<ExtArgs>
    schedule?: boolean | scheduleDefaultArgs<ExtArgs>
    user?: boolean | ticket_purchase$userArgs<ExtArgs>
    _count?: boolean | Ticket_purchaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket_purchase"]>



  export type ticket_purchaseSelectScalar = {
    id_ticketpurchase?: boolean
    purchase_date?: boolean
    buyer_name?: boolean
    buyer_email?: boolean
    buyer_phone?: boolean
    total_price?: boolean
    id_schedule?: boolean
    id_user?: boolean
  }

  export type ticket_purchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_ticketpurchase" | "purchase_date" | "buyer_name" | "buyer_email" | "buyer_phone" | "total_price" | "id_schedule" | "id_user", ExtArgs["result"]["ticket_purchase"]>
  export type ticket_purchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase_detail?: boolean | ticket_purchase$purchase_detailArgs<ExtArgs>
    schedule?: boolean | scheduleDefaultArgs<ExtArgs>
    user?: boolean | ticket_purchase$userArgs<ExtArgs>
    _count?: boolean | Ticket_purchaseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ticket_purchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ticket_purchase"
    objects: {
      purchase_detail: Prisma.$purchase_detailPayload<ExtArgs>[]
      schedule: Prisma.$schedulePayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_ticketpurchase: number
      purchase_date: Date
      buyer_name: string
      buyer_email: string
      buyer_phone: string
      total_price: number
      id_schedule: number
      id_user: number | null
    }, ExtArgs["result"]["ticket_purchase"]>
    composites: {}
  }

  type ticket_purchaseGetPayload<S extends boolean | null | undefined | ticket_purchaseDefaultArgs> = $Result.GetResult<Prisma.$ticket_purchasePayload, S>

  type ticket_purchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ticket_purchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ticket_purchaseCountAggregateInputType | true
    }

  export interface ticket_purchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ticket_purchase'], meta: { name: 'ticket_purchase' } }
    /**
     * Find zero or one Ticket_purchase that matches the filter.
     * @param {ticket_purchaseFindUniqueArgs} args - Arguments to find a Ticket_purchase
     * @example
     * // Get one Ticket_purchase
     * const ticket_purchase = await prisma.ticket_purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ticket_purchaseFindUniqueArgs>(args: SelectSubset<T, ticket_purchaseFindUniqueArgs<ExtArgs>>): Prisma__ticket_purchaseClient<$Result.GetResult<Prisma.$ticket_purchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket_purchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ticket_purchaseFindUniqueOrThrowArgs} args - Arguments to find a Ticket_purchase
     * @example
     * // Get one Ticket_purchase
     * const ticket_purchase = await prisma.ticket_purchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ticket_purchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, ticket_purchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ticket_purchaseClient<$Result.GetResult<Prisma.$ticket_purchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket_purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_purchaseFindFirstArgs} args - Arguments to find a Ticket_purchase
     * @example
     * // Get one Ticket_purchase
     * const ticket_purchase = await prisma.ticket_purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ticket_purchaseFindFirstArgs>(args?: SelectSubset<T, ticket_purchaseFindFirstArgs<ExtArgs>>): Prisma__ticket_purchaseClient<$Result.GetResult<Prisma.$ticket_purchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket_purchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_purchaseFindFirstOrThrowArgs} args - Arguments to find a Ticket_purchase
     * @example
     * // Get one Ticket_purchase
     * const ticket_purchase = await prisma.ticket_purchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ticket_purchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, ticket_purchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ticket_purchaseClient<$Result.GetResult<Prisma.$ticket_purchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ticket_purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_purchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ticket_purchases
     * const ticket_purchases = await prisma.ticket_purchase.findMany()
     * 
     * // Get first 10 Ticket_purchases
     * const ticket_purchases = await prisma.ticket_purchase.findMany({ take: 10 })
     * 
     * // Only select the `id_ticketpurchase`
     * const ticket_purchaseWithId_ticketpurchaseOnly = await prisma.ticket_purchase.findMany({ select: { id_ticketpurchase: true } })
     * 
     */
    findMany<T extends ticket_purchaseFindManyArgs>(args?: SelectSubset<T, ticket_purchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticket_purchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket_purchase.
     * @param {ticket_purchaseCreateArgs} args - Arguments to create a Ticket_purchase.
     * @example
     * // Create one Ticket_purchase
     * const Ticket_purchase = await prisma.ticket_purchase.create({
     *   data: {
     *     // ... data to create a Ticket_purchase
     *   }
     * })
     * 
     */
    create<T extends ticket_purchaseCreateArgs>(args: SelectSubset<T, ticket_purchaseCreateArgs<ExtArgs>>): Prisma__ticket_purchaseClient<$Result.GetResult<Prisma.$ticket_purchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ticket_purchases.
     * @param {ticket_purchaseCreateManyArgs} args - Arguments to create many Ticket_purchases.
     * @example
     * // Create many Ticket_purchases
     * const ticket_purchase = await prisma.ticket_purchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ticket_purchaseCreateManyArgs>(args?: SelectSubset<T, ticket_purchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket_purchase.
     * @param {ticket_purchaseDeleteArgs} args - Arguments to delete one Ticket_purchase.
     * @example
     * // Delete one Ticket_purchase
     * const Ticket_purchase = await prisma.ticket_purchase.delete({
     *   where: {
     *     // ... filter to delete one Ticket_purchase
     *   }
     * })
     * 
     */
    delete<T extends ticket_purchaseDeleteArgs>(args: SelectSubset<T, ticket_purchaseDeleteArgs<ExtArgs>>): Prisma__ticket_purchaseClient<$Result.GetResult<Prisma.$ticket_purchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket_purchase.
     * @param {ticket_purchaseUpdateArgs} args - Arguments to update one Ticket_purchase.
     * @example
     * // Update one Ticket_purchase
     * const ticket_purchase = await prisma.ticket_purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ticket_purchaseUpdateArgs>(args: SelectSubset<T, ticket_purchaseUpdateArgs<ExtArgs>>): Prisma__ticket_purchaseClient<$Result.GetResult<Prisma.$ticket_purchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ticket_purchases.
     * @param {ticket_purchaseDeleteManyArgs} args - Arguments to filter Ticket_purchases to delete.
     * @example
     * // Delete a few Ticket_purchases
     * const { count } = await prisma.ticket_purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ticket_purchaseDeleteManyArgs>(args?: SelectSubset<T, ticket_purchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ticket_purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_purchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ticket_purchases
     * const ticket_purchase = await prisma.ticket_purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ticket_purchaseUpdateManyArgs>(args: SelectSubset<T, ticket_purchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket_purchase.
     * @param {ticket_purchaseUpsertArgs} args - Arguments to update or create a Ticket_purchase.
     * @example
     * // Update or create a Ticket_purchase
     * const ticket_purchase = await prisma.ticket_purchase.upsert({
     *   create: {
     *     // ... data to create a Ticket_purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket_purchase we want to update
     *   }
     * })
     */
    upsert<T extends ticket_purchaseUpsertArgs>(args: SelectSubset<T, ticket_purchaseUpsertArgs<ExtArgs>>): Prisma__ticket_purchaseClient<$Result.GetResult<Prisma.$ticket_purchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ticket_purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_purchaseCountArgs} args - Arguments to filter Ticket_purchases to count.
     * @example
     * // Count the number of Ticket_purchases
     * const count = await prisma.ticket_purchase.count({
     *   where: {
     *     // ... the filter for the Ticket_purchases we want to count
     *   }
     * })
    **/
    count<T extends ticket_purchaseCountArgs>(
      args?: Subset<T, ticket_purchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ticket_purchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket_purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_purchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ticket_purchaseAggregateArgs>(args: Subset<T, Ticket_purchaseAggregateArgs>): Prisma.PrismaPromise<GetTicket_purchaseAggregateType<T>>

    /**
     * Group by Ticket_purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_purchaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ticket_purchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ticket_purchaseGroupByArgs['orderBy'] }
        : { orderBy?: ticket_purchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ticket_purchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicket_purchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ticket_purchase model
   */
  readonly fields: ticket_purchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ticket_purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ticket_purchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchase_detail<T extends ticket_purchase$purchase_detailArgs<ExtArgs> = {}>(args?: Subset<T, ticket_purchase$purchase_detailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchase_detailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedule<T extends scheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, scheduleDefaultArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends ticket_purchase$userArgs<ExtArgs> = {}>(args?: Subset<T, ticket_purchase$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ticket_purchase model
   */
  interface ticket_purchaseFieldRefs {
    readonly id_ticketpurchase: FieldRef<"ticket_purchase", 'Int'>
    readonly purchase_date: FieldRef<"ticket_purchase", 'DateTime'>
    readonly buyer_name: FieldRef<"ticket_purchase", 'String'>
    readonly buyer_email: FieldRef<"ticket_purchase", 'String'>
    readonly buyer_phone: FieldRef<"ticket_purchase", 'String'>
    readonly total_price: FieldRef<"ticket_purchase", 'Float'>
    readonly id_schedule: FieldRef<"ticket_purchase", 'Int'>
    readonly id_user: FieldRef<"ticket_purchase", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ticket_purchase findUnique
   */
  export type ticket_purchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_purchase
     */
    select?: ticket_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket_purchase
     */
    omit?: ticket_purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_purchaseInclude<ExtArgs> | null
    /**
     * Filter, which ticket_purchase to fetch.
     */
    where: ticket_purchaseWhereUniqueInput
  }

  /**
   * ticket_purchase findUniqueOrThrow
   */
  export type ticket_purchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_purchase
     */
    select?: ticket_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket_purchase
     */
    omit?: ticket_purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_purchaseInclude<ExtArgs> | null
    /**
     * Filter, which ticket_purchase to fetch.
     */
    where: ticket_purchaseWhereUniqueInput
  }

  /**
   * ticket_purchase findFirst
   */
  export type ticket_purchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_purchase
     */
    select?: ticket_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket_purchase
     */
    omit?: ticket_purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_purchaseInclude<ExtArgs> | null
    /**
     * Filter, which ticket_purchase to fetch.
     */
    where?: ticket_purchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_purchases to fetch.
     */
    orderBy?: ticket_purchaseOrderByWithRelationInput | ticket_purchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ticket_purchases.
     */
    cursor?: ticket_purchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ticket_purchases.
     */
    distinct?: Ticket_purchaseScalarFieldEnum | Ticket_purchaseScalarFieldEnum[]
  }

  /**
   * ticket_purchase findFirstOrThrow
   */
  export type ticket_purchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_purchase
     */
    select?: ticket_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket_purchase
     */
    omit?: ticket_purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_purchaseInclude<ExtArgs> | null
    /**
     * Filter, which ticket_purchase to fetch.
     */
    where?: ticket_purchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_purchases to fetch.
     */
    orderBy?: ticket_purchaseOrderByWithRelationInput | ticket_purchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ticket_purchases.
     */
    cursor?: ticket_purchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ticket_purchases.
     */
    distinct?: Ticket_purchaseScalarFieldEnum | Ticket_purchaseScalarFieldEnum[]
  }

  /**
   * ticket_purchase findMany
   */
  export type ticket_purchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_purchase
     */
    select?: ticket_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket_purchase
     */
    omit?: ticket_purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_purchaseInclude<ExtArgs> | null
    /**
     * Filter, which ticket_purchases to fetch.
     */
    where?: ticket_purchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ticket_purchases to fetch.
     */
    orderBy?: ticket_purchaseOrderByWithRelationInput | ticket_purchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ticket_purchases.
     */
    cursor?: ticket_purchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ticket_purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ticket_purchases.
     */
    skip?: number
    distinct?: Ticket_purchaseScalarFieldEnum | Ticket_purchaseScalarFieldEnum[]
  }

  /**
   * ticket_purchase create
   */
  export type ticket_purchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_purchase
     */
    select?: ticket_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket_purchase
     */
    omit?: ticket_purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_purchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a ticket_purchase.
     */
    data: XOR<ticket_purchaseCreateInput, ticket_purchaseUncheckedCreateInput>
  }

  /**
   * ticket_purchase createMany
   */
  export type ticket_purchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ticket_purchases.
     */
    data: ticket_purchaseCreateManyInput | ticket_purchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ticket_purchase update
   */
  export type ticket_purchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_purchase
     */
    select?: ticket_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket_purchase
     */
    omit?: ticket_purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_purchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a ticket_purchase.
     */
    data: XOR<ticket_purchaseUpdateInput, ticket_purchaseUncheckedUpdateInput>
    /**
     * Choose, which ticket_purchase to update.
     */
    where: ticket_purchaseWhereUniqueInput
  }

  /**
   * ticket_purchase updateMany
   */
  export type ticket_purchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ticket_purchases.
     */
    data: XOR<ticket_purchaseUpdateManyMutationInput, ticket_purchaseUncheckedUpdateManyInput>
    /**
     * Filter which ticket_purchases to update
     */
    where?: ticket_purchaseWhereInput
    /**
     * Limit how many ticket_purchases to update.
     */
    limit?: number
  }

  /**
   * ticket_purchase upsert
   */
  export type ticket_purchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_purchase
     */
    select?: ticket_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket_purchase
     */
    omit?: ticket_purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_purchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the ticket_purchase to update in case it exists.
     */
    where: ticket_purchaseWhereUniqueInput
    /**
     * In case the ticket_purchase found by the `where` argument doesn't exist, create a new ticket_purchase with this data.
     */
    create: XOR<ticket_purchaseCreateInput, ticket_purchaseUncheckedCreateInput>
    /**
     * In case the ticket_purchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ticket_purchaseUpdateInput, ticket_purchaseUncheckedUpdateInput>
  }

  /**
   * ticket_purchase delete
   */
  export type ticket_purchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_purchase
     */
    select?: ticket_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket_purchase
     */
    omit?: ticket_purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_purchaseInclude<ExtArgs> | null
    /**
     * Filter which ticket_purchase to delete.
     */
    where: ticket_purchaseWhereUniqueInput
  }

  /**
   * ticket_purchase deleteMany
   */
  export type ticket_purchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticket_purchases to delete
     */
    where?: ticket_purchaseWhereInput
    /**
     * Limit how many ticket_purchases to delete.
     */
    limit?: number
  }

  /**
   * ticket_purchase.purchase_detail
   */
  export type ticket_purchase$purchase_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_detail
     */
    select?: purchase_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_detail
     */
    omit?: purchase_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_detailInclude<ExtArgs> | null
    where?: purchase_detailWhereInput
    orderBy?: purchase_detailOrderByWithRelationInput | purchase_detailOrderByWithRelationInput[]
    cursor?: purchase_detailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Purchase_detailScalarFieldEnum | Purchase_detailScalarFieldEnum[]
  }

  /**
   * ticket_purchase.user
   */
  export type ticket_purchase$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * ticket_purchase without action
   */
  export type ticket_purchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_purchase
     */
    select?: ticket_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket_purchase
     */
    omit?: ticket_purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_purchaseInclude<ExtArgs> | null
  }


  /**
   * Model purchase_detail
   */

  export type AggregatePurchase_detail = {
    _count: Purchase_detailCountAggregateOutputType | null
    _avg: Purchase_detailAvgAggregateOutputType | null
    _sum: Purchase_detailSumAggregateOutputType | null
    _min: Purchase_detailMinAggregateOutputType | null
    _max: Purchase_detailMaxAggregateOutputType | null
  }

  export type Purchase_detailAvgAggregateOutputType = {
    id_purchasedetail: number | null
    total_price: number | null
    id_seat: number | null
    id_ticket_purchase: number | null
  }

  export type Purchase_detailSumAggregateOutputType = {
    id_purchasedetail: number | null
    total_price: number | null
    id_seat: number | null
    id_ticket_purchase: number | null
  }

  export type Purchase_detailMinAggregateOutputType = {
    id_purchasedetail: number | null
    buyer_name: string | null
    buyer_email: string | null
    buyer_phone: string | null
    total_price: number | null
    id_seat: number | null
    id_ticket_purchase: number | null
  }

  export type Purchase_detailMaxAggregateOutputType = {
    id_purchasedetail: number | null
    buyer_name: string | null
    buyer_email: string | null
    buyer_phone: string | null
    total_price: number | null
    id_seat: number | null
    id_ticket_purchase: number | null
  }

  export type Purchase_detailCountAggregateOutputType = {
    id_purchasedetail: number
    buyer_name: number
    buyer_email: number
    buyer_phone: number
    total_price: number
    id_seat: number
    id_ticket_purchase: number
    _all: number
  }


  export type Purchase_detailAvgAggregateInputType = {
    id_purchasedetail?: true
    total_price?: true
    id_seat?: true
    id_ticket_purchase?: true
  }

  export type Purchase_detailSumAggregateInputType = {
    id_purchasedetail?: true
    total_price?: true
    id_seat?: true
    id_ticket_purchase?: true
  }

  export type Purchase_detailMinAggregateInputType = {
    id_purchasedetail?: true
    buyer_name?: true
    buyer_email?: true
    buyer_phone?: true
    total_price?: true
    id_seat?: true
    id_ticket_purchase?: true
  }

  export type Purchase_detailMaxAggregateInputType = {
    id_purchasedetail?: true
    buyer_name?: true
    buyer_email?: true
    buyer_phone?: true
    total_price?: true
    id_seat?: true
    id_ticket_purchase?: true
  }

  export type Purchase_detailCountAggregateInputType = {
    id_purchasedetail?: true
    buyer_name?: true
    buyer_email?: true
    buyer_phone?: true
    total_price?: true
    id_seat?: true
    id_ticket_purchase?: true
    _all?: true
  }

  export type Purchase_detailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which purchase_detail to aggregate.
     */
    where?: purchase_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of purchase_details to fetch.
     */
    orderBy?: purchase_detailOrderByWithRelationInput | purchase_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: purchase_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` purchase_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` purchase_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned purchase_details
    **/
    _count?: true | Purchase_detailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Purchase_detailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Purchase_detailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Purchase_detailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Purchase_detailMaxAggregateInputType
  }

  export type GetPurchase_detailAggregateType<T extends Purchase_detailAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchase_detail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase_detail[P]>
      : GetScalarType<T[P], AggregatePurchase_detail[P]>
  }




  export type purchase_detailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: purchase_detailWhereInput
    orderBy?: purchase_detailOrderByWithAggregationInput | purchase_detailOrderByWithAggregationInput[]
    by: Purchase_detailScalarFieldEnum[] | Purchase_detailScalarFieldEnum
    having?: purchase_detailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Purchase_detailCountAggregateInputType | true
    _avg?: Purchase_detailAvgAggregateInputType
    _sum?: Purchase_detailSumAggregateInputType
    _min?: Purchase_detailMinAggregateInputType
    _max?: Purchase_detailMaxAggregateInputType
  }

  export type Purchase_detailGroupByOutputType = {
    id_purchasedetail: number
    buyer_name: string
    buyer_email: string
    buyer_phone: string
    total_price: number
    id_seat: number
    id_ticket_purchase: number
    _count: Purchase_detailCountAggregateOutputType | null
    _avg: Purchase_detailAvgAggregateOutputType | null
    _sum: Purchase_detailSumAggregateOutputType | null
    _min: Purchase_detailMinAggregateOutputType | null
    _max: Purchase_detailMaxAggregateOutputType | null
  }

  type GetPurchase_detailGroupByPayload<T extends purchase_detailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Purchase_detailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Purchase_detailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Purchase_detailGroupByOutputType[P]>
            : GetScalarType<T[P], Purchase_detailGroupByOutputType[P]>
        }
      >
    >


  export type purchase_detailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_purchasedetail?: boolean
    buyer_name?: boolean
    buyer_email?: boolean
    buyer_phone?: boolean
    total_price?: boolean
    id_seat?: boolean
    id_ticket_purchase?: boolean
    seat?: boolean | seatDefaultArgs<ExtArgs>
    ticket_purchase?: boolean | ticket_purchaseDefaultArgs<ExtArgs>
    seat_schedule?: boolean | purchase_detail$seat_scheduleArgs<ExtArgs>
    _count?: boolean | Purchase_detailCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase_detail"]>



  export type purchase_detailSelectScalar = {
    id_purchasedetail?: boolean
    buyer_name?: boolean
    buyer_email?: boolean
    buyer_phone?: boolean
    total_price?: boolean
    id_seat?: boolean
    id_ticket_purchase?: boolean
  }

  export type purchase_detailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_purchasedetail" | "buyer_name" | "buyer_email" | "buyer_phone" | "total_price" | "id_seat" | "id_ticket_purchase", ExtArgs["result"]["purchase_detail"]>
  export type purchase_detailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seat?: boolean | seatDefaultArgs<ExtArgs>
    ticket_purchase?: boolean | ticket_purchaseDefaultArgs<ExtArgs>
    seat_schedule?: boolean | purchase_detail$seat_scheduleArgs<ExtArgs>
    _count?: boolean | Purchase_detailCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $purchase_detailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "purchase_detail"
    objects: {
      seat: Prisma.$seatPayload<ExtArgs>
      ticket_purchase: Prisma.$ticket_purchasePayload<ExtArgs>
      seat_schedule: Prisma.$seat_schedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_purchasedetail: number
      buyer_name: string
      buyer_email: string
      buyer_phone: string
      total_price: number
      id_seat: number
      id_ticket_purchase: number
    }, ExtArgs["result"]["purchase_detail"]>
    composites: {}
  }

  type purchase_detailGetPayload<S extends boolean | null | undefined | purchase_detailDefaultArgs> = $Result.GetResult<Prisma.$purchase_detailPayload, S>

  type purchase_detailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<purchase_detailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Purchase_detailCountAggregateInputType | true
    }

  export interface purchase_detailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['purchase_detail'], meta: { name: 'purchase_detail' } }
    /**
     * Find zero or one Purchase_detail that matches the filter.
     * @param {purchase_detailFindUniqueArgs} args - Arguments to find a Purchase_detail
     * @example
     * // Get one Purchase_detail
     * const purchase_detail = await prisma.purchase_detail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends purchase_detailFindUniqueArgs>(args: SelectSubset<T, purchase_detailFindUniqueArgs<ExtArgs>>): Prisma__purchase_detailClient<$Result.GetResult<Prisma.$purchase_detailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purchase_detail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {purchase_detailFindUniqueOrThrowArgs} args - Arguments to find a Purchase_detail
     * @example
     * // Get one Purchase_detail
     * const purchase_detail = await prisma.purchase_detail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends purchase_detailFindUniqueOrThrowArgs>(args: SelectSubset<T, purchase_detailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__purchase_detailClient<$Result.GetResult<Prisma.$purchase_detailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase_detail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchase_detailFindFirstArgs} args - Arguments to find a Purchase_detail
     * @example
     * // Get one Purchase_detail
     * const purchase_detail = await prisma.purchase_detail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends purchase_detailFindFirstArgs>(args?: SelectSubset<T, purchase_detailFindFirstArgs<ExtArgs>>): Prisma__purchase_detailClient<$Result.GetResult<Prisma.$purchase_detailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase_detail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchase_detailFindFirstOrThrowArgs} args - Arguments to find a Purchase_detail
     * @example
     * // Get one Purchase_detail
     * const purchase_detail = await prisma.purchase_detail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends purchase_detailFindFirstOrThrowArgs>(args?: SelectSubset<T, purchase_detailFindFirstOrThrowArgs<ExtArgs>>): Prisma__purchase_detailClient<$Result.GetResult<Prisma.$purchase_detailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchase_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchase_detailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchase_details
     * const purchase_details = await prisma.purchase_detail.findMany()
     * 
     * // Get first 10 Purchase_details
     * const purchase_details = await prisma.purchase_detail.findMany({ take: 10 })
     * 
     * // Only select the `id_purchasedetail`
     * const purchase_detailWithId_purchasedetailOnly = await prisma.purchase_detail.findMany({ select: { id_purchasedetail: true } })
     * 
     */
    findMany<T extends purchase_detailFindManyArgs>(args?: SelectSubset<T, purchase_detailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchase_detailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purchase_detail.
     * @param {purchase_detailCreateArgs} args - Arguments to create a Purchase_detail.
     * @example
     * // Create one Purchase_detail
     * const Purchase_detail = await prisma.purchase_detail.create({
     *   data: {
     *     // ... data to create a Purchase_detail
     *   }
     * })
     * 
     */
    create<T extends purchase_detailCreateArgs>(args: SelectSubset<T, purchase_detailCreateArgs<ExtArgs>>): Prisma__purchase_detailClient<$Result.GetResult<Prisma.$purchase_detailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purchase_details.
     * @param {purchase_detailCreateManyArgs} args - Arguments to create many Purchase_details.
     * @example
     * // Create many Purchase_details
     * const purchase_detail = await prisma.purchase_detail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends purchase_detailCreateManyArgs>(args?: SelectSubset<T, purchase_detailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Purchase_detail.
     * @param {purchase_detailDeleteArgs} args - Arguments to delete one Purchase_detail.
     * @example
     * // Delete one Purchase_detail
     * const Purchase_detail = await prisma.purchase_detail.delete({
     *   where: {
     *     // ... filter to delete one Purchase_detail
     *   }
     * })
     * 
     */
    delete<T extends purchase_detailDeleteArgs>(args: SelectSubset<T, purchase_detailDeleteArgs<ExtArgs>>): Prisma__purchase_detailClient<$Result.GetResult<Prisma.$purchase_detailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purchase_detail.
     * @param {purchase_detailUpdateArgs} args - Arguments to update one Purchase_detail.
     * @example
     * // Update one Purchase_detail
     * const purchase_detail = await prisma.purchase_detail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends purchase_detailUpdateArgs>(args: SelectSubset<T, purchase_detailUpdateArgs<ExtArgs>>): Prisma__purchase_detailClient<$Result.GetResult<Prisma.$purchase_detailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purchase_details.
     * @param {purchase_detailDeleteManyArgs} args - Arguments to filter Purchase_details to delete.
     * @example
     * // Delete a few Purchase_details
     * const { count } = await prisma.purchase_detail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends purchase_detailDeleteManyArgs>(args?: SelectSubset<T, purchase_detailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchase_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchase_detailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchase_details
     * const purchase_detail = await prisma.purchase_detail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends purchase_detailUpdateManyArgs>(args: SelectSubset<T, purchase_detailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Purchase_detail.
     * @param {purchase_detailUpsertArgs} args - Arguments to update or create a Purchase_detail.
     * @example
     * // Update or create a Purchase_detail
     * const purchase_detail = await prisma.purchase_detail.upsert({
     *   create: {
     *     // ... data to create a Purchase_detail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase_detail we want to update
     *   }
     * })
     */
    upsert<T extends purchase_detailUpsertArgs>(args: SelectSubset<T, purchase_detailUpsertArgs<ExtArgs>>): Prisma__purchase_detailClient<$Result.GetResult<Prisma.$purchase_detailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purchase_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchase_detailCountArgs} args - Arguments to filter Purchase_details to count.
     * @example
     * // Count the number of Purchase_details
     * const count = await prisma.purchase_detail.count({
     *   where: {
     *     // ... the filter for the Purchase_details we want to count
     *   }
     * })
    **/
    count<T extends purchase_detailCountArgs>(
      args?: Subset<T, purchase_detailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Purchase_detailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchase_detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchase_detailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Purchase_detailAggregateArgs>(args: Subset<T, Purchase_detailAggregateArgs>): Prisma.PrismaPromise<GetPurchase_detailAggregateType<T>>

    /**
     * Group by Purchase_detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchase_detailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends purchase_detailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: purchase_detailGroupByArgs['orderBy'] }
        : { orderBy?: purchase_detailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, purchase_detailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchase_detailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the purchase_detail model
   */
  readonly fields: purchase_detailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for purchase_detail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__purchase_detailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seat<T extends seatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, seatDefaultArgs<ExtArgs>>): Prisma__seatClient<$Result.GetResult<Prisma.$seatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticket_purchase<T extends ticket_purchaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ticket_purchaseDefaultArgs<ExtArgs>>): Prisma__ticket_purchaseClient<$Result.GetResult<Prisma.$ticket_purchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seat_schedule<T extends purchase_detail$seat_scheduleArgs<ExtArgs> = {}>(args?: Subset<T, purchase_detail$seat_scheduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seat_schedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the purchase_detail model
   */
  interface purchase_detailFieldRefs {
    readonly id_purchasedetail: FieldRef<"purchase_detail", 'Int'>
    readonly buyer_name: FieldRef<"purchase_detail", 'String'>
    readonly buyer_email: FieldRef<"purchase_detail", 'String'>
    readonly buyer_phone: FieldRef<"purchase_detail", 'String'>
    readonly total_price: FieldRef<"purchase_detail", 'Float'>
    readonly id_seat: FieldRef<"purchase_detail", 'Int'>
    readonly id_ticket_purchase: FieldRef<"purchase_detail", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * purchase_detail findUnique
   */
  export type purchase_detailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_detail
     */
    select?: purchase_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_detail
     */
    omit?: purchase_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_detailInclude<ExtArgs> | null
    /**
     * Filter, which purchase_detail to fetch.
     */
    where: purchase_detailWhereUniqueInput
  }

  /**
   * purchase_detail findUniqueOrThrow
   */
  export type purchase_detailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_detail
     */
    select?: purchase_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_detail
     */
    omit?: purchase_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_detailInclude<ExtArgs> | null
    /**
     * Filter, which purchase_detail to fetch.
     */
    where: purchase_detailWhereUniqueInput
  }

  /**
   * purchase_detail findFirst
   */
  export type purchase_detailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_detail
     */
    select?: purchase_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_detail
     */
    omit?: purchase_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_detailInclude<ExtArgs> | null
    /**
     * Filter, which purchase_detail to fetch.
     */
    where?: purchase_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of purchase_details to fetch.
     */
    orderBy?: purchase_detailOrderByWithRelationInput | purchase_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for purchase_details.
     */
    cursor?: purchase_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` purchase_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` purchase_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of purchase_details.
     */
    distinct?: Purchase_detailScalarFieldEnum | Purchase_detailScalarFieldEnum[]
  }

  /**
   * purchase_detail findFirstOrThrow
   */
  export type purchase_detailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_detail
     */
    select?: purchase_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_detail
     */
    omit?: purchase_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_detailInclude<ExtArgs> | null
    /**
     * Filter, which purchase_detail to fetch.
     */
    where?: purchase_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of purchase_details to fetch.
     */
    orderBy?: purchase_detailOrderByWithRelationInput | purchase_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for purchase_details.
     */
    cursor?: purchase_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` purchase_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` purchase_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of purchase_details.
     */
    distinct?: Purchase_detailScalarFieldEnum | Purchase_detailScalarFieldEnum[]
  }

  /**
   * purchase_detail findMany
   */
  export type purchase_detailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_detail
     */
    select?: purchase_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_detail
     */
    omit?: purchase_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_detailInclude<ExtArgs> | null
    /**
     * Filter, which purchase_details to fetch.
     */
    where?: purchase_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of purchase_details to fetch.
     */
    orderBy?: purchase_detailOrderByWithRelationInput | purchase_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing purchase_details.
     */
    cursor?: purchase_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` purchase_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` purchase_details.
     */
    skip?: number
    distinct?: Purchase_detailScalarFieldEnum | Purchase_detailScalarFieldEnum[]
  }

  /**
   * purchase_detail create
   */
  export type purchase_detailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_detail
     */
    select?: purchase_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_detail
     */
    omit?: purchase_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_detailInclude<ExtArgs> | null
    /**
     * The data needed to create a purchase_detail.
     */
    data: XOR<purchase_detailCreateInput, purchase_detailUncheckedCreateInput>
  }

  /**
   * purchase_detail createMany
   */
  export type purchase_detailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many purchase_details.
     */
    data: purchase_detailCreateManyInput | purchase_detailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * purchase_detail update
   */
  export type purchase_detailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_detail
     */
    select?: purchase_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_detail
     */
    omit?: purchase_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_detailInclude<ExtArgs> | null
    /**
     * The data needed to update a purchase_detail.
     */
    data: XOR<purchase_detailUpdateInput, purchase_detailUncheckedUpdateInput>
    /**
     * Choose, which purchase_detail to update.
     */
    where: purchase_detailWhereUniqueInput
  }

  /**
   * purchase_detail updateMany
   */
  export type purchase_detailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update purchase_details.
     */
    data: XOR<purchase_detailUpdateManyMutationInput, purchase_detailUncheckedUpdateManyInput>
    /**
     * Filter which purchase_details to update
     */
    where?: purchase_detailWhereInput
    /**
     * Limit how many purchase_details to update.
     */
    limit?: number
  }

  /**
   * purchase_detail upsert
   */
  export type purchase_detailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_detail
     */
    select?: purchase_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_detail
     */
    omit?: purchase_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_detailInclude<ExtArgs> | null
    /**
     * The filter to search for the purchase_detail to update in case it exists.
     */
    where: purchase_detailWhereUniqueInput
    /**
     * In case the purchase_detail found by the `where` argument doesn't exist, create a new purchase_detail with this data.
     */
    create: XOR<purchase_detailCreateInput, purchase_detailUncheckedCreateInput>
    /**
     * In case the purchase_detail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<purchase_detailUpdateInput, purchase_detailUncheckedUpdateInput>
  }

  /**
   * purchase_detail delete
   */
  export type purchase_detailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_detail
     */
    select?: purchase_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_detail
     */
    omit?: purchase_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_detailInclude<ExtArgs> | null
    /**
     * Filter which purchase_detail to delete.
     */
    where: purchase_detailWhereUniqueInput
  }

  /**
   * purchase_detail deleteMany
   */
  export type purchase_detailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which purchase_details to delete
     */
    where?: purchase_detailWhereInput
    /**
     * Limit how many purchase_details to delete.
     */
    limit?: number
  }

  /**
   * purchase_detail.seat_schedule
   */
  export type purchase_detail$seat_scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat_schedule
     */
    select?: seat_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat_schedule
     */
    omit?: seat_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seat_scheduleInclude<ExtArgs> | null
    where?: seat_scheduleWhereInput
    orderBy?: seat_scheduleOrderByWithRelationInput | seat_scheduleOrderByWithRelationInput[]
    cursor?: seat_scheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Seat_scheduleScalarFieldEnum | Seat_scheduleScalarFieldEnum[]
  }

  /**
   * purchase_detail without action
   */
  export type purchase_detailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_detail
     */
    select?: purchase_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_detail
     */
    omit?: purchase_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_detailInclude<ExtArgs> | null
  }


  /**
   * Model train
   */

  export type AggregateTrain = {
    _count: TrainCountAggregateOutputType | null
    _avg: TrainAvgAggregateOutputType | null
    _sum: TrainSumAggregateOutputType | null
    _min: TrainMinAggregateOutputType | null
    _max: TrainMaxAggregateOutputType | null
  }

  export type TrainAvgAggregateOutputType = {
    id_train: number | null
  }

  export type TrainSumAggregateOutputType = {
    id_train: number | null
  }

  export type TrainMinAggregateOutputType = {
    id_train: number | null
    train_name: string | null
    description: string | null
    train_picture: string | null
    train_status: $Enums.train_status | null
  }

  export type TrainMaxAggregateOutputType = {
    id_train: number | null
    train_name: string | null
    description: string | null
    train_picture: string | null
    train_status: $Enums.train_status | null
  }

  export type TrainCountAggregateOutputType = {
    id_train: number
    train_name: number
    description: number
    train_picture: number
    train_status: number
    _all: number
  }


  export type TrainAvgAggregateInputType = {
    id_train?: true
  }

  export type TrainSumAggregateInputType = {
    id_train?: true
  }

  export type TrainMinAggregateInputType = {
    id_train?: true
    train_name?: true
    description?: true
    train_picture?: true
    train_status?: true
  }

  export type TrainMaxAggregateInputType = {
    id_train?: true
    train_name?: true
    description?: true
    train_picture?: true
    train_status?: true
  }

  export type TrainCountAggregateInputType = {
    id_train?: true
    train_name?: true
    description?: true
    train_picture?: true
    train_status?: true
    _all?: true
  }

  export type TrainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which train to aggregate.
     */
    where?: trainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trains to fetch.
     */
    orderBy?: trainOrderByWithRelationInput | trainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: trainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned trains
    **/
    _count?: true | TrainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrainAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrainSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrainMaxAggregateInputType
  }

  export type GetTrainAggregateType<T extends TrainAggregateArgs> = {
        [P in keyof T & keyof AggregateTrain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrain[P]>
      : GetScalarType<T[P], AggregateTrain[P]>
  }




  export type trainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trainWhereInput
    orderBy?: trainOrderByWithAggregationInput | trainOrderByWithAggregationInput[]
    by: TrainScalarFieldEnum[] | TrainScalarFieldEnum
    having?: trainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrainCountAggregateInputType | true
    _avg?: TrainAvgAggregateInputType
    _sum?: TrainSumAggregateInputType
    _min?: TrainMinAggregateInputType
    _max?: TrainMaxAggregateInputType
  }

  export type TrainGroupByOutputType = {
    id_train: number
    train_name: string
    description: string
    train_picture: string
    train_status: $Enums.train_status
    _count: TrainCountAggregateOutputType | null
    _avg: TrainAvgAggregateOutputType | null
    _sum: TrainSumAggregateOutputType | null
    _min: TrainMinAggregateOutputType | null
    _max: TrainMaxAggregateOutputType | null
  }

  type GetTrainGroupByPayload<T extends trainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrainGroupByOutputType[P]>
            : GetScalarType<T[P], TrainGroupByOutputType[P]>
        }
      >
    >


  export type trainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_train?: boolean
    train_name?: boolean
    description?: boolean
    train_picture?: boolean
    train_status?: boolean
    carriage?: boolean | train$carriageArgs<ExtArgs>
    schedule?: boolean | train$scheduleArgs<ExtArgs>
    _count?: boolean | TrainCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["train"]>



  export type trainSelectScalar = {
    id_train?: boolean
    train_name?: boolean
    description?: boolean
    train_picture?: boolean
    train_status?: boolean
  }

  export type trainOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_train" | "train_name" | "description" | "train_picture" | "train_status", ExtArgs["result"]["train"]>
  export type trainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carriage?: boolean | train$carriageArgs<ExtArgs>
    schedule?: boolean | train$scheduleArgs<ExtArgs>
    _count?: boolean | TrainCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $trainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "train"
    objects: {
      carriage: Prisma.$carriagePayload<ExtArgs>[]
      schedule: Prisma.$schedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_train: number
      train_name: string
      description: string
      train_picture: string
      train_status: $Enums.train_status
    }, ExtArgs["result"]["train"]>
    composites: {}
  }

  type trainGetPayload<S extends boolean | null | undefined | trainDefaultArgs> = $Result.GetResult<Prisma.$trainPayload, S>

  type trainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<trainFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrainCountAggregateInputType | true
    }

  export interface trainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['train'], meta: { name: 'train' } }
    /**
     * Find zero or one Train that matches the filter.
     * @param {trainFindUniqueArgs} args - Arguments to find a Train
     * @example
     * // Get one Train
     * const train = await prisma.train.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends trainFindUniqueArgs>(args: SelectSubset<T, trainFindUniqueArgs<ExtArgs>>): Prisma__trainClient<$Result.GetResult<Prisma.$trainPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Train that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {trainFindUniqueOrThrowArgs} args - Arguments to find a Train
     * @example
     * // Get one Train
     * const train = await prisma.train.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends trainFindUniqueOrThrowArgs>(args: SelectSubset<T, trainFindUniqueOrThrowArgs<ExtArgs>>): Prisma__trainClient<$Result.GetResult<Prisma.$trainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Train that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trainFindFirstArgs} args - Arguments to find a Train
     * @example
     * // Get one Train
     * const train = await prisma.train.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends trainFindFirstArgs>(args?: SelectSubset<T, trainFindFirstArgs<ExtArgs>>): Prisma__trainClient<$Result.GetResult<Prisma.$trainPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Train that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trainFindFirstOrThrowArgs} args - Arguments to find a Train
     * @example
     * // Get one Train
     * const train = await prisma.train.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends trainFindFirstOrThrowArgs>(args?: SelectSubset<T, trainFindFirstOrThrowArgs<ExtArgs>>): Prisma__trainClient<$Result.GetResult<Prisma.$trainPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trains
     * const trains = await prisma.train.findMany()
     * 
     * // Get first 10 Trains
     * const trains = await prisma.train.findMany({ take: 10 })
     * 
     * // Only select the `id_train`
     * const trainWithId_trainOnly = await prisma.train.findMany({ select: { id_train: true } })
     * 
     */
    findMany<T extends trainFindManyArgs>(args?: SelectSubset<T, trainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Train.
     * @param {trainCreateArgs} args - Arguments to create a Train.
     * @example
     * // Create one Train
     * const Train = await prisma.train.create({
     *   data: {
     *     // ... data to create a Train
     *   }
     * })
     * 
     */
    create<T extends trainCreateArgs>(args: SelectSubset<T, trainCreateArgs<ExtArgs>>): Prisma__trainClient<$Result.GetResult<Prisma.$trainPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trains.
     * @param {trainCreateManyArgs} args - Arguments to create many Trains.
     * @example
     * // Create many Trains
     * const train = await prisma.train.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends trainCreateManyArgs>(args?: SelectSubset<T, trainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Train.
     * @param {trainDeleteArgs} args - Arguments to delete one Train.
     * @example
     * // Delete one Train
     * const Train = await prisma.train.delete({
     *   where: {
     *     // ... filter to delete one Train
     *   }
     * })
     * 
     */
    delete<T extends trainDeleteArgs>(args: SelectSubset<T, trainDeleteArgs<ExtArgs>>): Prisma__trainClient<$Result.GetResult<Prisma.$trainPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Train.
     * @param {trainUpdateArgs} args - Arguments to update one Train.
     * @example
     * // Update one Train
     * const train = await prisma.train.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends trainUpdateArgs>(args: SelectSubset<T, trainUpdateArgs<ExtArgs>>): Prisma__trainClient<$Result.GetResult<Prisma.$trainPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trains.
     * @param {trainDeleteManyArgs} args - Arguments to filter Trains to delete.
     * @example
     * // Delete a few Trains
     * const { count } = await prisma.train.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends trainDeleteManyArgs>(args?: SelectSubset<T, trainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trains
     * const train = await prisma.train.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends trainUpdateManyArgs>(args: SelectSubset<T, trainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Train.
     * @param {trainUpsertArgs} args - Arguments to update or create a Train.
     * @example
     * // Update or create a Train
     * const train = await prisma.train.upsert({
     *   create: {
     *     // ... data to create a Train
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Train we want to update
     *   }
     * })
     */
    upsert<T extends trainUpsertArgs>(args: SelectSubset<T, trainUpsertArgs<ExtArgs>>): Prisma__trainClient<$Result.GetResult<Prisma.$trainPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trainCountArgs} args - Arguments to filter Trains to count.
     * @example
     * // Count the number of Trains
     * const count = await prisma.train.count({
     *   where: {
     *     // ... the filter for the Trains we want to count
     *   }
     * })
    **/
    count<T extends trainCountArgs>(
      args?: Subset<T, trainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Train.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrainAggregateArgs>(args: Subset<T, TrainAggregateArgs>): Prisma.PrismaPromise<GetTrainAggregateType<T>>

    /**
     * Group by Train.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trainGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends trainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: trainGroupByArgs['orderBy'] }
        : { orderBy?: trainGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, trainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the train model
   */
  readonly fields: trainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for train.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__trainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carriage<T extends train$carriageArgs<ExtArgs> = {}>(args?: Subset<T, train$carriageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carriagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedule<T extends train$scheduleArgs<ExtArgs> = {}>(args?: Subset<T, train$scheduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the train model
   */
  interface trainFieldRefs {
    readonly id_train: FieldRef<"train", 'Int'>
    readonly train_name: FieldRef<"train", 'String'>
    readonly description: FieldRef<"train", 'String'>
    readonly train_picture: FieldRef<"train", 'String'>
    readonly train_status: FieldRef<"train", 'train_status'>
  }
    

  // Custom InputTypes
  /**
   * train findUnique
   */
  export type trainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the train
     */
    select?: trainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the train
     */
    omit?: trainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trainInclude<ExtArgs> | null
    /**
     * Filter, which train to fetch.
     */
    where: trainWhereUniqueInput
  }

  /**
   * train findUniqueOrThrow
   */
  export type trainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the train
     */
    select?: trainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the train
     */
    omit?: trainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trainInclude<ExtArgs> | null
    /**
     * Filter, which train to fetch.
     */
    where: trainWhereUniqueInput
  }

  /**
   * train findFirst
   */
  export type trainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the train
     */
    select?: trainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the train
     */
    omit?: trainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trainInclude<ExtArgs> | null
    /**
     * Filter, which train to fetch.
     */
    where?: trainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trains to fetch.
     */
    orderBy?: trainOrderByWithRelationInput | trainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trains.
     */
    cursor?: trainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trains.
     */
    distinct?: TrainScalarFieldEnum | TrainScalarFieldEnum[]
  }

  /**
   * train findFirstOrThrow
   */
  export type trainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the train
     */
    select?: trainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the train
     */
    omit?: trainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trainInclude<ExtArgs> | null
    /**
     * Filter, which train to fetch.
     */
    where?: trainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trains to fetch.
     */
    orderBy?: trainOrderByWithRelationInput | trainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trains.
     */
    cursor?: trainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trains.
     */
    distinct?: TrainScalarFieldEnum | TrainScalarFieldEnum[]
  }

  /**
   * train findMany
   */
  export type trainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the train
     */
    select?: trainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the train
     */
    omit?: trainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trainInclude<ExtArgs> | null
    /**
     * Filter, which trains to fetch.
     */
    where?: trainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trains to fetch.
     */
    orderBy?: trainOrderByWithRelationInput | trainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing trains.
     */
    cursor?: trainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trains.
     */
    skip?: number
    distinct?: TrainScalarFieldEnum | TrainScalarFieldEnum[]
  }

  /**
   * train create
   */
  export type trainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the train
     */
    select?: trainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the train
     */
    omit?: trainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trainInclude<ExtArgs> | null
    /**
     * The data needed to create a train.
     */
    data: XOR<trainCreateInput, trainUncheckedCreateInput>
  }

  /**
   * train createMany
   */
  export type trainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many trains.
     */
    data: trainCreateManyInput | trainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * train update
   */
  export type trainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the train
     */
    select?: trainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the train
     */
    omit?: trainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trainInclude<ExtArgs> | null
    /**
     * The data needed to update a train.
     */
    data: XOR<trainUpdateInput, trainUncheckedUpdateInput>
    /**
     * Choose, which train to update.
     */
    where: trainWhereUniqueInput
  }

  /**
   * train updateMany
   */
  export type trainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update trains.
     */
    data: XOR<trainUpdateManyMutationInput, trainUncheckedUpdateManyInput>
    /**
     * Filter which trains to update
     */
    where?: trainWhereInput
    /**
     * Limit how many trains to update.
     */
    limit?: number
  }

  /**
   * train upsert
   */
  export type trainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the train
     */
    select?: trainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the train
     */
    omit?: trainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trainInclude<ExtArgs> | null
    /**
     * The filter to search for the train to update in case it exists.
     */
    where: trainWhereUniqueInput
    /**
     * In case the train found by the `where` argument doesn't exist, create a new train with this data.
     */
    create: XOR<trainCreateInput, trainUncheckedCreateInput>
    /**
     * In case the train was found with the provided `where` argument, update it with this data.
     */
    update: XOR<trainUpdateInput, trainUncheckedUpdateInput>
  }

  /**
   * train delete
   */
  export type trainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the train
     */
    select?: trainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the train
     */
    omit?: trainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trainInclude<ExtArgs> | null
    /**
     * Filter which train to delete.
     */
    where: trainWhereUniqueInput
  }

  /**
   * train deleteMany
   */
  export type trainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trains to delete
     */
    where?: trainWhereInput
    /**
     * Limit how many trains to delete.
     */
    limit?: number
  }

  /**
   * train.carriage
   */
  export type train$carriageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carriage
     */
    select?: carriageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carriage
     */
    omit?: carriageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carriageInclude<ExtArgs> | null
    where?: carriageWhereInput
    orderBy?: carriageOrderByWithRelationInput | carriageOrderByWithRelationInput[]
    cursor?: carriageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarriageScalarFieldEnum | CarriageScalarFieldEnum[]
  }

  /**
   * train.schedule
   */
  export type train$scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    where?: scheduleWhereInput
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[]
    cursor?: scheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * train without action
   */
  export type trainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the train
     */
    select?: trainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the train
     */
    omit?: trainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trainInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id_user: number | null
  }

  export type UserSumAggregateOutputType = {
    id_user: number | null
  }

  export type UserMinAggregateOutputType = {
    id_user: number | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.user_role | null
    profile_picture: string | null
    createdAt: Date | null
    updatedAt: Date | null
    address: string | null
    nik: string | null
    phone: string | null
  }

  export type UserMaxAggregateOutputType = {
    id_user: number | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.user_role | null
    profile_picture: string | null
    createdAt: Date | null
    updatedAt: Date | null
    address: string | null
    nik: string | null
    phone: string | null
  }

  export type UserCountAggregateOutputType = {
    id_user: number
    username: number
    email: number
    password: number
    role: number
    profile_picture: number
    createdAt: number
    updatedAt: number
    address: number
    nik: number
    phone: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id_user?: true
  }

  export type UserSumAggregateInputType = {
    id_user?: true
  }

  export type UserMinAggregateInputType = {
    id_user?: true
    username?: true
    email?: true
    password?: true
    role?: true
    profile_picture?: true
    createdAt?: true
    updatedAt?: true
    address?: true
    nik?: true
    phone?: true
  }

  export type UserMaxAggregateInputType = {
    id_user?: true
    username?: true
    email?: true
    password?: true
    role?: true
    profile_picture?: true
    createdAt?: true
    updatedAt?: true
    address?: true
    nik?: true
    phone?: true
  }

  export type UserCountAggregateInputType = {
    id_user?: true
    username?: true
    email?: true
    password?: true
    role?: true
    profile_picture?: true
    createdAt?: true
    updatedAt?: true
    address?: true
    nik?: true
    phone?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id_user: number
    username: string
    email: string
    password: string
    role: $Enums.user_role
    profile_picture: string
    createdAt: Date
    updatedAt: Date
    address: string
    nik: string
    phone: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    profile_picture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    address?: boolean
    nik?: boolean
    phone?: boolean
    ticket_purchase?: boolean | user$ticket_purchaseArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id_user?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    profile_picture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    address?: boolean
    nik?: boolean
    phone?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_user" | "username" | "email" | "password" | "role" | "profile_picture" | "createdAt" | "updatedAt" | "address" | "nik" | "phone", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket_purchase?: boolean | user$ticket_purchaseArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      ticket_purchase: Prisma.$ticket_purchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_user: number
      username: string
      email: string
      password: string
      role: $Enums.user_role
      profile_picture: string
      createdAt: Date
      updatedAt: Date
      address: string
      nik: string
      phone: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id_user`
     * const userWithId_userOnly = await prisma.user.findMany({ select: { id_user: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket_purchase<T extends user$ticket_purchaseArgs<ExtArgs> = {}>(args?: Subset<T, user$ticket_purchaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticket_purchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id_user: FieldRef<"user", 'Int'>
    readonly username: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'user_role'>
    readonly profile_picture: FieldRef<"user", 'String'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
    readonly address: FieldRef<"user", 'String'>
    readonly nik: FieldRef<"user", 'String'>
    readonly phone: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.ticket_purchase
   */
  export type user$ticket_purchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_purchase
     */
    select?: ticket_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket_purchase
     */
    omit?: ticket_purchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticket_purchaseInclude<ExtArgs> | null
    where?: ticket_purchaseWhereInput
    orderBy?: ticket_purchaseOrderByWithRelationInput | ticket_purchaseOrderByWithRelationInput[]
    cursor?: ticket_purchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ticket_purchaseScalarFieldEnum | Ticket_purchaseScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CarriageScalarFieldEnum: {
    id_carriage: 'id_carriage',
    carriage_name: 'carriage_name',
    quota: 'quota',
    carriage_category: 'carriage_category',
    id_train: 'id_train'
  };

  export type CarriageScalarFieldEnum = (typeof CarriageScalarFieldEnum)[keyof typeof CarriageScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id_schedule: 'id_schedule',
    schedule_name: 'schedule_name',
    departure: 'departure',
    destination: 'destination',
    departure_date: 'departure_date',
    arrival_date: 'arrival_date',
    price: 'price',
    quota_total: 'quota_total',
    status: 'status',
    id_train: 'id_train'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const SeatScalarFieldEnum: {
    id_seat: 'id_seat',
    seat_num: 'seat_num',
    id_carriage: 'id_carriage'
  };

  export type SeatScalarFieldEnum = (typeof SeatScalarFieldEnum)[keyof typeof SeatScalarFieldEnum]


  export const Seat_scheduleScalarFieldEnum: {
    id_seat_schedule: 'id_seat_schedule',
    id_seat: 'id_seat',
    id_schedule: 'id_schedule',
    seatschedule_status: 'seatschedule_status',
    purchaseDetailId_purchasedetail: 'purchaseDetailId_purchasedetail'
  };

  export type Seat_scheduleScalarFieldEnum = (typeof Seat_scheduleScalarFieldEnum)[keyof typeof Seat_scheduleScalarFieldEnum]


  export const Ticket_purchaseScalarFieldEnum: {
    id_ticketpurchase: 'id_ticketpurchase',
    purchase_date: 'purchase_date',
    buyer_name: 'buyer_name',
    buyer_email: 'buyer_email',
    buyer_phone: 'buyer_phone',
    total_price: 'total_price',
    id_schedule: 'id_schedule',
    id_user: 'id_user'
  };

  export type Ticket_purchaseScalarFieldEnum = (typeof Ticket_purchaseScalarFieldEnum)[keyof typeof Ticket_purchaseScalarFieldEnum]


  export const Purchase_detailScalarFieldEnum: {
    id_purchasedetail: 'id_purchasedetail',
    buyer_name: 'buyer_name',
    buyer_email: 'buyer_email',
    buyer_phone: 'buyer_phone',
    total_price: 'total_price',
    id_seat: 'id_seat',
    id_ticket_purchase: 'id_ticket_purchase'
  };

  export type Purchase_detailScalarFieldEnum = (typeof Purchase_detailScalarFieldEnum)[keyof typeof Purchase_detailScalarFieldEnum]


  export const TrainScalarFieldEnum: {
    id_train: 'id_train',
    train_name: 'train_name',
    description: 'description',
    train_picture: 'train_picture',
    train_status: 'train_status'
  };

  export type TrainScalarFieldEnum = (typeof TrainScalarFieldEnum)[keyof typeof TrainScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id_user: 'id_user',
    username: 'username',
    email: 'email',
    password: 'password',
    role: 'role',
    profile_picture: 'profile_picture',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    address: 'address',
    nik: 'nik',
    phone: 'phone'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const carriageOrderByRelevanceFieldEnum: {
    carriage_name: 'carriage_name'
  };

  export type carriageOrderByRelevanceFieldEnum = (typeof carriageOrderByRelevanceFieldEnum)[keyof typeof carriageOrderByRelevanceFieldEnum]


  export const scheduleOrderByRelevanceFieldEnum: {
    schedule_name: 'schedule_name',
    departure: 'departure',
    destination: 'destination'
  };

  export type scheduleOrderByRelevanceFieldEnum = (typeof scheduleOrderByRelevanceFieldEnum)[keyof typeof scheduleOrderByRelevanceFieldEnum]


  export const seatOrderByRelevanceFieldEnum: {
    seat_num: 'seat_num'
  };

  export type seatOrderByRelevanceFieldEnum = (typeof seatOrderByRelevanceFieldEnum)[keyof typeof seatOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ticket_purchaseOrderByRelevanceFieldEnum: {
    buyer_name: 'buyer_name',
    buyer_email: 'buyer_email',
    buyer_phone: 'buyer_phone'
  };

  export type ticket_purchaseOrderByRelevanceFieldEnum = (typeof ticket_purchaseOrderByRelevanceFieldEnum)[keyof typeof ticket_purchaseOrderByRelevanceFieldEnum]


  export const purchase_detailOrderByRelevanceFieldEnum: {
    buyer_name: 'buyer_name',
    buyer_email: 'buyer_email',
    buyer_phone: 'buyer_phone'
  };

  export type purchase_detailOrderByRelevanceFieldEnum = (typeof purchase_detailOrderByRelevanceFieldEnum)[keyof typeof purchase_detailOrderByRelevanceFieldEnum]


  export const trainOrderByRelevanceFieldEnum: {
    train_name: 'train_name',
    description: 'description',
    train_picture: 'train_picture'
  };

  export type trainOrderByRelevanceFieldEnum = (typeof trainOrderByRelevanceFieldEnum)[keyof typeof trainOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    username: 'username',
    email: 'email',
    password: 'password',
    profile_picture: 'profile_picture',
    address: 'address',
    nik: 'nik',
    phone: 'phone'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'carriage_category'
   */
  export type Enumcarriage_categoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'carriage_category'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'status'
   */
  export type EnumstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status'>
    


  /**
   * Reference to a field of type 'seatschedule_status'
   */
  export type Enumseatschedule_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'seatschedule_status'>
    


  /**
   * Reference to a field of type 'train_status'
   */
  export type Enumtrain_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'train_status'>
    


  /**
   * Reference to a field of type 'user_role'
   */
  export type Enumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role'>
    
  /**
   * Deep Input Types
   */


  export type carriageWhereInput = {
    AND?: carriageWhereInput | carriageWhereInput[]
    OR?: carriageWhereInput[]
    NOT?: carriageWhereInput | carriageWhereInput[]
    id_carriage?: IntFilter<"carriage"> | number
    carriage_name?: StringFilter<"carriage"> | string
    quota?: IntFilter<"carriage"> | number
    carriage_category?: Enumcarriage_categoryFilter<"carriage"> | $Enums.carriage_category
    id_train?: IntFilter<"carriage"> | number
    train?: XOR<TrainScalarRelationFilter, trainWhereInput>
    seat?: SeatListRelationFilter
  }

  export type carriageOrderByWithRelationInput = {
    id_carriage?: SortOrder
    carriage_name?: SortOrder
    quota?: SortOrder
    carriage_category?: SortOrder
    id_train?: SortOrder
    train?: trainOrderByWithRelationInput
    seat?: seatOrderByRelationAggregateInput
    _relevance?: carriageOrderByRelevanceInput
  }

  export type carriageWhereUniqueInput = Prisma.AtLeast<{
    id_carriage?: number
    AND?: carriageWhereInput | carriageWhereInput[]
    OR?: carriageWhereInput[]
    NOT?: carriageWhereInput | carriageWhereInput[]
    carriage_name?: StringFilter<"carriage"> | string
    quota?: IntFilter<"carriage"> | number
    carriage_category?: Enumcarriage_categoryFilter<"carriage"> | $Enums.carriage_category
    id_train?: IntFilter<"carriage"> | number
    train?: XOR<TrainScalarRelationFilter, trainWhereInput>
    seat?: SeatListRelationFilter
  }, "id_carriage">

  export type carriageOrderByWithAggregationInput = {
    id_carriage?: SortOrder
    carriage_name?: SortOrder
    quota?: SortOrder
    carriage_category?: SortOrder
    id_train?: SortOrder
    _count?: carriageCountOrderByAggregateInput
    _avg?: carriageAvgOrderByAggregateInput
    _max?: carriageMaxOrderByAggregateInput
    _min?: carriageMinOrderByAggregateInput
    _sum?: carriageSumOrderByAggregateInput
  }

  export type carriageScalarWhereWithAggregatesInput = {
    AND?: carriageScalarWhereWithAggregatesInput | carriageScalarWhereWithAggregatesInput[]
    OR?: carriageScalarWhereWithAggregatesInput[]
    NOT?: carriageScalarWhereWithAggregatesInput | carriageScalarWhereWithAggregatesInput[]
    id_carriage?: IntWithAggregatesFilter<"carriage"> | number
    carriage_name?: StringWithAggregatesFilter<"carriage"> | string
    quota?: IntWithAggregatesFilter<"carriage"> | number
    carriage_category?: Enumcarriage_categoryWithAggregatesFilter<"carriage"> | $Enums.carriage_category
    id_train?: IntWithAggregatesFilter<"carriage"> | number
  }

  export type scheduleWhereInput = {
    AND?: scheduleWhereInput | scheduleWhereInput[]
    OR?: scheduleWhereInput[]
    NOT?: scheduleWhereInput | scheduleWhereInput[]
    id_schedule?: IntFilter<"schedule"> | number
    schedule_name?: StringFilter<"schedule"> | string
    departure?: StringFilter<"schedule"> | string
    destination?: StringFilter<"schedule"> | string
    departure_date?: DateTimeFilter<"schedule"> | Date | string
    arrival_date?: DateTimeFilter<"schedule"> | Date | string
    price?: FloatFilter<"schedule"> | number
    quota_total?: IntFilter<"schedule"> | number
    status?: EnumstatusFilter<"schedule"> | $Enums.status
    id_train?: IntFilter<"schedule"> | number
    train?: XOR<TrainScalarRelationFilter, trainWhereInput>
    seat_schedule?: Seat_scheduleListRelationFilter
    ticket_purchase?: Ticket_purchaseListRelationFilter
  }

  export type scheduleOrderByWithRelationInput = {
    id_schedule?: SortOrder
    schedule_name?: SortOrder
    departure?: SortOrder
    destination?: SortOrder
    departure_date?: SortOrder
    arrival_date?: SortOrder
    price?: SortOrder
    quota_total?: SortOrder
    status?: SortOrder
    id_train?: SortOrder
    train?: trainOrderByWithRelationInput
    seat_schedule?: seat_scheduleOrderByRelationAggregateInput
    ticket_purchase?: ticket_purchaseOrderByRelationAggregateInput
    _relevance?: scheduleOrderByRelevanceInput
  }

  export type scheduleWhereUniqueInput = Prisma.AtLeast<{
    id_schedule?: number
    AND?: scheduleWhereInput | scheduleWhereInput[]
    OR?: scheduleWhereInput[]
    NOT?: scheduleWhereInput | scheduleWhereInput[]
    schedule_name?: StringFilter<"schedule"> | string
    departure?: StringFilter<"schedule"> | string
    destination?: StringFilter<"schedule"> | string
    departure_date?: DateTimeFilter<"schedule"> | Date | string
    arrival_date?: DateTimeFilter<"schedule"> | Date | string
    price?: FloatFilter<"schedule"> | number
    quota_total?: IntFilter<"schedule"> | number
    status?: EnumstatusFilter<"schedule"> | $Enums.status
    id_train?: IntFilter<"schedule"> | number
    train?: XOR<TrainScalarRelationFilter, trainWhereInput>
    seat_schedule?: Seat_scheduleListRelationFilter
    ticket_purchase?: Ticket_purchaseListRelationFilter
  }, "id_schedule">

  export type scheduleOrderByWithAggregationInput = {
    id_schedule?: SortOrder
    schedule_name?: SortOrder
    departure?: SortOrder
    destination?: SortOrder
    departure_date?: SortOrder
    arrival_date?: SortOrder
    price?: SortOrder
    quota_total?: SortOrder
    status?: SortOrder
    id_train?: SortOrder
    _count?: scheduleCountOrderByAggregateInput
    _avg?: scheduleAvgOrderByAggregateInput
    _max?: scheduleMaxOrderByAggregateInput
    _min?: scheduleMinOrderByAggregateInput
    _sum?: scheduleSumOrderByAggregateInput
  }

  export type scheduleScalarWhereWithAggregatesInput = {
    AND?: scheduleScalarWhereWithAggregatesInput | scheduleScalarWhereWithAggregatesInput[]
    OR?: scheduleScalarWhereWithAggregatesInput[]
    NOT?: scheduleScalarWhereWithAggregatesInput | scheduleScalarWhereWithAggregatesInput[]
    id_schedule?: IntWithAggregatesFilter<"schedule"> | number
    schedule_name?: StringWithAggregatesFilter<"schedule"> | string
    departure?: StringWithAggregatesFilter<"schedule"> | string
    destination?: StringWithAggregatesFilter<"schedule"> | string
    departure_date?: DateTimeWithAggregatesFilter<"schedule"> | Date | string
    arrival_date?: DateTimeWithAggregatesFilter<"schedule"> | Date | string
    price?: FloatWithAggregatesFilter<"schedule"> | number
    quota_total?: IntWithAggregatesFilter<"schedule"> | number
    status?: EnumstatusWithAggregatesFilter<"schedule"> | $Enums.status
    id_train?: IntWithAggregatesFilter<"schedule"> | number
  }

  export type seatWhereInput = {
    AND?: seatWhereInput | seatWhereInput[]
    OR?: seatWhereInput[]
    NOT?: seatWhereInput | seatWhereInput[]
    id_seat?: IntFilter<"seat"> | number
    seat_num?: StringFilter<"seat"> | string
    id_carriage?: IntFilter<"seat"> | number
    purchase_detail?: Purchase_detailListRelationFilter
    carriage?: XOR<CarriageScalarRelationFilter, carriageWhereInput>
    seat_schedule?: Seat_scheduleListRelationFilter
  }

  export type seatOrderByWithRelationInput = {
    id_seat?: SortOrder
    seat_num?: SortOrder
    id_carriage?: SortOrder
    purchase_detail?: purchase_detailOrderByRelationAggregateInput
    carriage?: carriageOrderByWithRelationInput
    seat_schedule?: seat_scheduleOrderByRelationAggregateInput
    _relevance?: seatOrderByRelevanceInput
  }

  export type seatWhereUniqueInput = Prisma.AtLeast<{
    id_seat?: number
    AND?: seatWhereInput | seatWhereInput[]
    OR?: seatWhereInput[]
    NOT?: seatWhereInput | seatWhereInput[]
    seat_num?: StringFilter<"seat"> | string
    id_carriage?: IntFilter<"seat"> | number
    purchase_detail?: Purchase_detailListRelationFilter
    carriage?: XOR<CarriageScalarRelationFilter, carriageWhereInput>
    seat_schedule?: Seat_scheduleListRelationFilter
  }, "id_seat">

  export type seatOrderByWithAggregationInput = {
    id_seat?: SortOrder
    seat_num?: SortOrder
    id_carriage?: SortOrder
    _count?: seatCountOrderByAggregateInput
    _avg?: seatAvgOrderByAggregateInput
    _max?: seatMaxOrderByAggregateInput
    _min?: seatMinOrderByAggregateInput
    _sum?: seatSumOrderByAggregateInput
  }

  export type seatScalarWhereWithAggregatesInput = {
    AND?: seatScalarWhereWithAggregatesInput | seatScalarWhereWithAggregatesInput[]
    OR?: seatScalarWhereWithAggregatesInput[]
    NOT?: seatScalarWhereWithAggregatesInput | seatScalarWhereWithAggregatesInput[]
    id_seat?: IntWithAggregatesFilter<"seat"> | number
    seat_num?: StringWithAggregatesFilter<"seat"> | string
    id_carriage?: IntWithAggregatesFilter<"seat"> | number
  }

  export type seat_scheduleWhereInput = {
    AND?: seat_scheduleWhereInput | seat_scheduleWhereInput[]
    OR?: seat_scheduleWhereInput[]
    NOT?: seat_scheduleWhereInput | seat_scheduleWhereInput[]
    id_seat_schedule?: IntFilter<"seat_schedule"> | number
    id_seat?: IntFilter<"seat_schedule"> | number
    id_schedule?: IntFilter<"seat_schedule"> | number
    seatschedule_status?: Enumseatschedule_statusFilter<"seat_schedule"> | $Enums.seatschedule_status
    purchaseDetailId_purchasedetail?: IntNullableFilter<"seat_schedule"> | number | null
    purchase_detail?: XOR<Purchase_detailNullableScalarRelationFilter, purchase_detailWhereInput> | null
    schedule?: XOR<ScheduleScalarRelationFilter, scheduleWhereInput>
    seat?: XOR<SeatScalarRelationFilter, seatWhereInput>
  }

  export type seat_scheduleOrderByWithRelationInput = {
    id_seat_schedule?: SortOrder
    id_seat?: SortOrder
    id_schedule?: SortOrder
    seatschedule_status?: SortOrder
    purchaseDetailId_purchasedetail?: SortOrderInput | SortOrder
    purchase_detail?: purchase_detailOrderByWithRelationInput
    schedule?: scheduleOrderByWithRelationInput
    seat?: seatOrderByWithRelationInput
  }

  export type seat_scheduleWhereUniqueInput = Prisma.AtLeast<{
    id_seat_schedule?: number
    id_seat_id_schedule?: seat_scheduleId_seatId_scheduleCompoundUniqueInput
    AND?: seat_scheduleWhereInput | seat_scheduleWhereInput[]
    OR?: seat_scheduleWhereInput[]
    NOT?: seat_scheduleWhereInput | seat_scheduleWhereInput[]
    id_seat?: IntFilter<"seat_schedule"> | number
    id_schedule?: IntFilter<"seat_schedule"> | number
    seatschedule_status?: Enumseatschedule_statusFilter<"seat_schedule"> | $Enums.seatschedule_status
    purchaseDetailId_purchasedetail?: IntNullableFilter<"seat_schedule"> | number | null
    purchase_detail?: XOR<Purchase_detailNullableScalarRelationFilter, purchase_detailWhereInput> | null
    schedule?: XOR<ScheduleScalarRelationFilter, scheduleWhereInput>
    seat?: XOR<SeatScalarRelationFilter, seatWhereInput>
  }, "id_seat_schedule" | "id_seat_id_schedule">

  export type seat_scheduleOrderByWithAggregationInput = {
    id_seat_schedule?: SortOrder
    id_seat?: SortOrder
    id_schedule?: SortOrder
    seatschedule_status?: SortOrder
    purchaseDetailId_purchasedetail?: SortOrderInput | SortOrder
    _count?: seat_scheduleCountOrderByAggregateInput
    _avg?: seat_scheduleAvgOrderByAggregateInput
    _max?: seat_scheduleMaxOrderByAggregateInput
    _min?: seat_scheduleMinOrderByAggregateInput
    _sum?: seat_scheduleSumOrderByAggregateInput
  }

  export type seat_scheduleScalarWhereWithAggregatesInput = {
    AND?: seat_scheduleScalarWhereWithAggregatesInput | seat_scheduleScalarWhereWithAggregatesInput[]
    OR?: seat_scheduleScalarWhereWithAggregatesInput[]
    NOT?: seat_scheduleScalarWhereWithAggregatesInput | seat_scheduleScalarWhereWithAggregatesInput[]
    id_seat_schedule?: IntWithAggregatesFilter<"seat_schedule"> | number
    id_seat?: IntWithAggregatesFilter<"seat_schedule"> | number
    id_schedule?: IntWithAggregatesFilter<"seat_schedule"> | number
    seatschedule_status?: Enumseatschedule_statusWithAggregatesFilter<"seat_schedule"> | $Enums.seatschedule_status
    purchaseDetailId_purchasedetail?: IntNullableWithAggregatesFilter<"seat_schedule"> | number | null
  }

  export type ticket_purchaseWhereInput = {
    AND?: ticket_purchaseWhereInput | ticket_purchaseWhereInput[]
    OR?: ticket_purchaseWhereInput[]
    NOT?: ticket_purchaseWhereInput | ticket_purchaseWhereInput[]
    id_ticketpurchase?: IntFilter<"ticket_purchase"> | number
    purchase_date?: DateTimeFilter<"ticket_purchase"> | Date | string
    buyer_name?: StringFilter<"ticket_purchase"> | string
    buyer_email?: StringFilter<"ticket_purchase"> | string
    buyer_phone?: StringFilter<"ticket_purchase"> | string
    total_price?: FloatFilter<"ticket_purchase"> | number
    id_schedule?: IntFilter<"ticket_purchase"> | number
    id_user?: IntNullableFilter<"ticket_purchase"> | number | null
    purchase_detail?: Purchase_detailListRelationFilter
    schedule?: XOR<ScheduleScalarRelationFilter, scheduleWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }

  export type ticket_purchaseOrderByWithRelationInput = {
    id_ticketpurchase?: SortOrder
    purchase_date?: SortOrder
    buyer_name?: SortOrder
    buyer_email?: SortOrder
    buyer_phone?: SortOrder
    total_price?: SortOrder
    id_schedule?: SortOrder
    id_user?: SortOrderInput | SortOrder
    purchase_detail?: purchase_detailOrderByRelationAggregateInput
    schedule?: scheduleOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    _relevance?: ticket_purchaseOrderByRelevanceInput
  }

  export type ticket_purchaseWhereUniqueInput = Prisma.AtLeast<{
    id_ticketpurchase?: number
    AND?: ticket_purchaseWhereInput | ticket_purchaseWhereInput[]
    OR?: ticket_purchaseWhereInput[]
    NOT?: ticket_purchaseWhereInput | ticket_purchaseWhereInput[]
    purchase_date?: DateTimeFilter<"ticket_purchase"> | Date | string
    buyer_name?: StringFilter<"ticket_purchase"> | string
    buyer_email?: StringFilter<"ticket_purchase"> | string
    buyer_phone?: StringFilter<"ticket_purchase"> | string
    total_price?: FloatFilter<"ticket_purchase"> | number
    id_schedule?: IntFilter<"ticket_purchase"> | number
    id_user?: IntNullableFilter<"ticket_purchase"> | number | null
    purchase_detail?: Purchase_detailListRelationFilter
    schedule?: XOR<ScheduleScalarRelationFilter, scheduleWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }, "id_ticketpurchase">

  export type ticket_purchaseOrderByWithAggregationInput = {
    id_ticketpurchase?: SortOrder
    purchase_date?: SortOrder
    buyer_name?: SortOrder
    buyer_email?: SortOrder
    buyer_phone?: SortOrder
    total_price?: SortOrder
    id_schedule?: SortOrder
    id_user?: SortOrderInput | SortOrder
    _count?: ticket_purchaseCountOrderByAggregateInput
    _avg?: ticket_purchaseAvgOrderByAggregateInput
    _max?: ticket_purchaseMaxOrderByAggregateInput
    _min?: ticket_purchaseMinOrderByAggregateInput
    _sum?: ticket_purchaseSumOrderByAggregateInput
  }

  export type ticket_purchaseScalarWhereWithAggregatesInput = {
    AND?: ticket_purchaseScalarWhereWithAggregatesInput | ticket_purchaseScalarWhereWithAggregatesInput[]
    OR?: ticket_purchaseScalarWhereWithAggregatesInput[]
    NOT?: ticket_purchaseScalarWhereWithAggregatesInput | ticket_purchaseScalarWhereWithAggregatesInput[]
    id_ticketpurchase?: IntWithAggregatesFilter<"ticket_purchase"> | number
    purchase_date?: DateTimeWithAggregatesFilter<"ticket_purchase"> | Date | string
    buyer_name?: StringWithAggregatesFilter<"ticket_purchase"> | string
    buyer_email?: StringWithAggregatesFilter<"ticket_purchase"> | string
    buyer_phone?: StringWithAggregatesFilter<"ticket_purchase"> | string
    total_price?: FloatWithAggregatesFilter<"ticket_purchase"> | number
    id_schedule?: IntWithAggregatesFilter<"ticket_purchase"> | number
    id_user?: IntNullableWithAggregatesFilter<"ticket_purchase"> | number | null
  }

  export type purchase_detailWhereInput = {
    AND?: purchase_detailWhereInput | purchase_detailWhereInput[]
    OR?: purchase_detailWhereInput[]
    NOT?: purchase_detailWhereInput | purchase_detailWhereInput[]
    id_purchasedetail?: IntFilter<"purchase_detail"> | number
    buyer_name?: StringFilter<"purchase_detail"> | string
    buyer_email?: StringFilter<"purchase_detail"> | string
    buyer_phone?: StringFilter<"purchase_detail"> | string
    total_price?: FloatFilter<"purchase_detail"> | number
    id_seat?: IntFilter<"purchase_detail"> | number
    id_ticket_purchase?: IntFilter<"purchase_detail"> | number
    seat?: XOR<SeatScalarRelationFilter, seatWhereInput>
    ticket_purchase?: XOR<Ticket_purchaseScalarRelationFilter, ticket_purchaseWhereInput>
    seat_schedule?: Seat_scheduleListRelationFilter
  }

  export type purchase_detailOrderByWithRelationInput = {
    id_purchasedetail?: SortOrder
    buyer_name?: SortOrder
    buyer_email?: SortOrder
    buyer_phone?: SortOrder
    total_price?: SortOrder
    id_seat?: SortOrder
    id_ticket_purchase?: SortOrder
    seat?: seatOrderByWithRelationInput
    ticket_purchase?: ticket_purchaseOrderByWithRelationInput
    seat_schedule?: seat_scheduleOrderByRelationAggregateInput
    _relevance?: purchase_detailOrderByRelevanceInput
  }

  export type purchase_detailWhereUniqueInput = Prisma.AtLeast<{
    id_purchasedetail?: number
    AND?: purchase_detailWhereInput | purchase_detailWhereInput[]
    OR?: purchase_detailWhereInput[]
    NOT?: purchase_detailWhereInput | purchase_detailWhereInput[]
    buyer_name?: StringFilter<"purchase_detail"> | string
    buyer_email?: StringFilter<"purchase_detail"> | string
    buyer_phone?: StringFilter<"purchase_detail"> | string
    total_price?: FloatFilter<"purchase_detail"> | number
    id_seat?: IntFilter<"purchase_detail"> | number
    id_ticket_purchase?: IntFilter<"purchase_detail"> | number
    seat?: XOR<SeatScalarRelationFilter, seatWhereInput>
    ticket_purchase?: XOR<Ticket_purchaseScalarRelationFilter, ticket_purchaseWhereInput>
    seat_schedule?: Seat_scheduleListRelationFilter
  }, "id_purchasedetail">

  export type purchase_detailOrderByWithAggregationInput = {
    id_purchasedetail?: SortOrder
    buyer_name?: SortOrder
    buyer_email?: SortOrder
    buyer_phone?: SortOrder
    total_price?: SortOrder
    id_seat?: SortOrder
    id_ticket_purchase?: SortOrder
    _count?: purchase_detailCountOrderByAggregateInput
    _avg?: purchase_detailAvgOrderByAggregateInput
    _max?: purchase_detailMaxOrderByAggregateInput
    _min?: purchase_detailMinOrderByAggregateInput
    _sum?: purchase_detailSumOrderByAggregateInput
  }

  export type purchase_detailScalarWhereWithAggregatesInput = {
    AND?: purchase_detailScalarWhereWithAggregatesInput | purchase_detailScalarWhereWithAggregatesInput[]
    OR?: purchase_detailScalarWhereWithAggregatesInput[]
    NOT?: purchase_detailScalarWhereWithAggregatesInput | purchase_detailScalarWhereWithAggregatesInput[]
    id_purchasedetail?: IntWithAggregatesFilter<"purchase_detail"> | number
    buyer_name?: StringWithAggregatesFilter<"purchase_detail"> | string
    buyer_email?: StringWithAggregatesFilter<"purchase_detail"> | string
    buyer_phone?: StringWithAggregatesFilter<"purchase_detail"> | string
    total_price?: FloatWithAggregatesFilter<"purchase_detail"> | number
    id_seat?: IntWithAggregatesFilter<"purchase_detail"> | number
    id_ticket_purchase?: IntWithAggregatesFilter<"purchase_detail"> | number
  }

  export type trainWhereInput = {
    AND?: trainWhereInput | trainWhereInput[]
    OR?: trainWhereInput[]
    NOT?: trainWhereInput | trainWhereInput[]
    id_train?: IntFilter<"train"> | number
    train_name?: StringFilter<"train"> | string
    description?: StringFilter<"train"> | string
    train_picture?: StringFilter<"train"> | string
    train_status?: Enumtrain_statusFilter<"train"> | $Enums.train_status
    carriage?: CarriageListRelationFilter
    schedule?: ScheduleListRelationFilter
  }

  export type trainOrderByWithRelationInput = {
    id_train?: SortOrder
    train_name?: SortOrder
    description?: SortOrder
    train_picture?: SortOrder
    train_status?: SortOrder
    carriage?: carriageOrderByRelationAggregateInput
    schedule?: scheduleOrderByRelationAggregateInput
    _relevance?: trainOrderByRelevanceInput
  }

  export type trainWhereUniqueInput = Prisma.AtLeast<{
    id_train?: number
    AND?: trainWhereInput | trainWhereInput[]
    OR?: trainWhereInput[]
    NOT?: trainWhereInput | trainWhereInput[]
    train_name?: StringFilter<"train"> | string
    description?: StringFilter<"train"> | string
    train_picture?: StringFilter<"train"> | string
    train_status?: Enumtrain_statusFilter<"train"> | $Enums.train_status
    carriage?: CarriageListRelationFilter
    schedule?: ScheduleListRelationFilter
  }, "id_train">

  export type trainOrderByWithAggregationInput = {
    id_train?: SortOrder
    train_name?: SortOrder
    description?: SortOrder
    train_picture?: SortOrder
    train_status?: SortOrder
    _count?: trainCountOrderByAggregateInput
    _avg?: trainAvgOrderByAggregateInput
    _max?: trainMaxOrderByAggregateInput
    _min?: trainMinOrderByAggregateInput
    _sum?: trainSumOrderByAggregateInput
  }

  export type trainScalarWhereWithAggregatesInput = {
    AND?: trainScalarWhereWithAggregatesInput | trainScalarWhereWithAggregatesInput[]
    OR?: trainScalarWhereWithAggregatesInput[]
    NOT?: trainScalarWhereWithAggregatesInput | trainScalarWhereWithAggregatesInput[]
    id_train?: IntWithAggregatesFilter<"train"> | number
    train_name?: StringWithAggregatesFilter<"train"> | string
    description?: StringWithAggregatesFilter<"train"> | string
    train_picture?: StringWithAggregatesFilter<"train"> | string
    train_status?: Enumtrain_statusWithAggregatesFilter<"train"> | $Enums.train_status
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id_user?: IntFilter<"user"> | number
    username?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: Enumuser_roleFilter<"user"> | $Enums.user_role
    profile_picture?: StringFilter<"user"> | string
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    address?: StringFilter<"user"> | string
    nik?: StringFilter<"user"> | string
    phone?: StringFilter<"user"> | string
    ticket_purchase?: Ticket_purchaseListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id_user?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profile_picture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    address?: SortOrder
    nik?: SortOrder
    phone?: SortOrder
    ticket_purchase?: ticket_purchaseOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id_user?: number
    email?: string
    nik?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    username?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: Enumuser_roleFilter<"user"> | $Enums.user_role
    profile_picture?: StringFilter<"user"> | string
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    address?: StringFilter<"user"> | string
    phone?: StringFilter<"user"> | string
    ticket_purchase?: Ticket_purchaseListRelationFilter
  }, "id_user" | "email" | "nik">

  export type userOrderByWithAggregationInput = {
    id_user?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profile_picture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    address?: SortOrder
    nik?: SortOrder
    phone?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id_user?: IntWithAggregatesFilter<"user"> | number
    username?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    role?: Enumuser_roleWithAggregatesFilter<"user"> | $Enums.user_role
    profile_picture?: StringWithAggregatesFilter<"user"> | string
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    address?: StringWithAggregatesFilter<"user"> | string
    nik?: StringWithAggregatesFilter<"user"> | string
    phone?: StringWithAggregatesFilter<"user"> | string
  }

  export type carriageCreateInput = {
    carriage_name: string
    quota: number
    carriage_category: $Enums.carriage_category
    train: trainCreateNestedOneWithoutCarriageInput
    seat?: seatCreateNestedManyWithoutCarriageInput
  }

  export type carriageUncheckedCreateInput = {
    id_carriage?: number
    carriage_name: string
    quota: number
    carriage_category: $Enums.carriage_category
    id_train: number
    seat?: seatUncheckedCreateNestedManyWithoutCarriageInput
  }

  export type carriageUpdateInput = {
    carriage_name?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
    carriage_category?: Enumcarriage_categoryFieldUpdateOperationsInput | $Enums.carriage_category
    train?: trainUpdateOneRequiredWithoutCarriageNestedInput
    seat?: seatUpdateManyWithoutCarriageNestedInput
  }

  export type carriageUncheckedUpdateInput = {
    id_carriage?: IntFieldUpdateOperationsInput | number
    carriage_name?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
    carriage_category?: Enumcarriage_categoryFieldUpdateOperationsInput | $Enums.carriage_category
    id_train?: IntFieldUpdateOperationsInput | number
    seat?: seatUncheckedUpdateManyWithoutCarriageNestedInput
  }

  export type carriageCreateManyInput = {
    id_carriage?: number
    carriage_name: string
    quota: number
    carriage_category: $Enums.carriage_category
    id_train: number
  }

  export type carriageUpdateManyMutationInput = {
    carriage_name?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
    carriage_category?: Enumcarriage_categoryFieldUpdateOperationsInput | $Enums.carriage_category
  }

  export type carriageUncheckedUpdateManyInput = {
    id_carriage?: IntFieldUpdateOperationsInput | number
    carriage_name?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
    carriage_category?: Enumcarriage_categoryFieldUpdateOperationsInput | $Enums.carriage_category
    id_train?: IntFieldUpdateOperationsInput | number
  }

  export type scheduleCreateInput = {
    schedule_name: string
    departure: string
    destination: string
    departure_date: Date | string
    arrival_date: Date | string
    price: number
    quota_total: number
    status?: $Enums.status
    train: trainCreateNestedOneWithoutScheduleInput
    seat_schedule?: seat_scheduleCreateNestedManyWithoutScheduleInput
    ticket_purchase?: ticket_purchaseCreateNestedManyWithoutScheduleInput
  }

  export type scheduleUncheckedCreateInput = {
    id_schedule?: number
    schedule_name: string
    departure: string
    destination: string
    departure_date: Date | string
    arrival_date: Date | string
    price: number
    quota_total: number
    status?: $Enums.status
    id_train: number
    seat_schedule?: seat_scheduleUncheckedCreateNestedManyWithoutScheduleInput
    ticket_purchase?: ticket_purchaseUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type scheduleUpdateInput = {
    schedule_name?: StringFieldUpdateOperationsInput | string
    departure?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departure_date?: DateTimeFieldUpdateOperationsInput | Date | string
    arrival_date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    quota_total?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    train?: trainUpdateOneRequiredWithoutScheduleNestedInput
    seat_schedule?: seat_scheduleUpdateManyWithoutScheduleNestedInput
    ticket_purchase?: ticket_purchaseUpdateManyWithoutScheduleNestedInput
  }

  export type scheduleUncheckedUpdateInput = {
    id_schedule?: IntFieldUpdateOperationsInput | number
    schedule_name?: StringFieldUpdateOperationsInput | string
    departure?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departure_date?: DateTimeFieldUpdateOperationsInput | Date | string
    arrival_date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    quota_total?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    id_train?: IntFieldUpdateOperationsInput | number
    seat_schedule?: seat_scheduleUncheckedUpdateManyWithoutScheduleNestedInput
    ticket_purchase?: ticket_purchaseUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type scheduleCreateManyInput = {
    id_schedule?: number
    schedule_name: string
    departure: string
    destination: string
    departure_date: Date | string
    arrival_date: Date | string
    price: number
    quota_total: number
    status?: $Enums.status
    id_train: number
  }

  export type scheduleUpdateManyMutationInput = {
    schedule_name?: StringFieldUpdateOperationsInput | string
    departure?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departure_date?: DateTimeFieldUpdateOperationsInput | Date | string
    arrival_date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    quota_total?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
  }

  export type scheduleUncheckedUpdateManyInput = {
    id_schedule?: IntFieldUpdateOperationsInput | number
    schedule_name?: StringFieldUpdateOperationsInput | string
    departure?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departure_date?: DateTimeFieldUpdateOperationsInput | Date | string
    arrival_date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    quota_total?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    id_train?: IntFieldUpdateOperationsInput | number
  }

  export type seatCreateInput = {
    seat_num: string
    purchase_detail?: purchase_detailCreateNestedManyWithoutSeatInput
    carriage: carriageCreateNestedOneWithoutSeatInput
    seat_schedule?: seat_scheduleCreateNestedManyWithoutSeatInput
  }

  export type seatUncheckedCreateInput = {
    id_seat?: number
    seat_num: string
    id_carriage: number
    purchase_detail?: purchase_detailUncheckedCreateNestedManyWithoutSeatInput
    seat_schedule?: seat_scheduleUncheckedCreateNestedManyWithoutSeatInput
  }

  export type seatUpdateInput = {
    seat_num?: StringFieldUpdateOperationsInput | string
    purchase_detail?: purchase_detailUpdateManyWithoutSeatNestedInput
    carriage?: carriageUpdateOneRequiredWithoutSeatNestedInput
    seat_schedule?: seat_scheduleUpdateManyWithoutSeatNestedInput
  }

  export type seatUncheckedUpdateInput = {
    id_seat?: IntFieldUpdateOperationsInput | number
    seat_num?: StringFieldUpdateOperationsInput | string
    id_carriage?: IntFieldUpdateOperationsInput | number
    purchase_detail?: purchase_detailUncheckedUpdateManyWithoutSeatNestedInput
    seat_schedule?: seat_scheduleUncheckedUpdateManyWithoutSeatNestedInput
  }

  export type seatCreateManyInput = {
    id_seat?: number
    seat_num: string
    id_carriage: number
  }

  export type seatUpdateManyMutationInput = {
    seat_num?: StringFieldUpdateOperationsInput | string
  }

  export type seatUncheckedUpdateManyInput = {
    id_seat?: IntFieldUpdateOperationsInput | number
    seat_num?: StringFieldUpdateOperationsInput | string
    id_carriage?: IntFieldUpdateOperationsInput | number
  }

  export type seat_scheduleCreateInput = {
    seatschedule_status?: $Enums.seatschedule_status
    purchase_detail?: purchase_detailCreateNestedOneWithoutSeat_scheduleInput
    schedule: scheduleCreateNestedOneWithoutSeat_scheduleInput
    seat: seatCreateNestedOneWithoutSeat_scheduleInput
  }

  export type seat_scheduleUncheckedCreateInput = {
    id_seat_schedule?: number
    id_seat: number
    id_schedule: number
    seatschedule_status?: $Enums.seatschedule_status
    purchaseDetailId_purchasedetail?: number | null
  }

  export type seat_scheduleUpdateInput = {
    seatschedule_status?: Enumseatschedule_statusFieldUpdateOperationsInput | $Enums.seatschedule_status
    purchase_detail?: purchase_detailUpdateOneWithoutSeat_scheduleNestedInput
    schedule?: scheduleUpdateOneRequiredWithoutSeat_scheduleNestedInput
    seat?: seatUpdateOneRequiredWithoutSeat_scheduleNestedInput
  }

  export type seat_scheduleUncheckedUpdateInput = {
    id_seat_schedule?: IntFieldUpdateOperationsInput | number
    id_seat?: IntFieldUpdateOperationsInput | number
    id_schedule?: IntFieldUpdateOperationsInput | number
    seatschedule_status?: Enumseatschedule_statusFieldUpdateOperationsInput | $Enums.seatschedule_status
    purchaseDetailId_purchasedetail?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type seat_scheduleCreateManyInput = {
    id_seat_schedule?: number
    id_seat: number
    id_schedule: number
    seatschedule_status?: $Enums.seatschedule_status
    purchaseDetailId_purchasedetail?: number | null
  }

  export type seat_scheduleUpdateManyMutationInput = {
    seatschedule_status?: Enumseatschedule_statusFieldUpdateOperationsInput | $Enums.seatschedule_status
  }

  export type seat_scheduleUncheckedUpdateManyInput = {
    id_seat_schedule?: IntFieldUpdateOperationsInput | number
    id_seat?: IntFieldUpdateOperationsInput | number
    id_schedule?: IntFieldUpdateOperationsInput | number
    seatschedule_status?: Enumseatschedule_statusFieldUpdateOperationsInput | $Enums.seatschedule_status
    purchaseDetailId_purchasedetail?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ticket_purchaseCreateInput = {
    purchase_date?: Date | string
    buyer_name: string
    buyer_email: string
    buyer_phone: string
    total_price: number
    purchase_detail?: purchase_detailCreateNestedManyWithoutTicket_purchaseInput
    schedule: scheduleCreateNestedOneWithoutTicket_purchaseInput
    user?: userCreateNestedOneWithoutTicket_purchaseInput
  }

  export type ticket_purchaseUncheckedCreateInput = {
    id_ticketpurchase?: number
    purchase_date?: Date | string
    buyer_name: string
    buyer_email: string
    buyer_phone: string
    total_price: number
    id_schedule: number
    id_user?: number | null
    purchase_detail?: purchase_detailUncheckedCreateNestedManyWithoutTicket_purchaseInput
  }

  export type ticket_purchaseUpdateInput = {
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer_name?: StringFieldUpdateOperationsInput | string
    buyer_email?: StringFieldUpdateOperationsInput | string
    buyer_phone?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
    purchase_detail?: purchase_detailUpdateManyWithoutTicket_purchaseNestedInput
    schedule?: scheduleUpdateOneRequiredWithoutTicket_purchaseNestedInput
    user?: userUpdateOneWithoutTicket_purchaseNestedInput
  }

  export type ticket_purchaseUncheckedUpdateInput = {
    id_ticketpurchase?: IntFieldUpdateOperationsInput | number
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer_name?: StringFieldUpdateOperationsInput | string
    buyer_email?: StringFieldUpdateOperationsInput | string
    buyer_phone?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
    id_schedule?: IntFieldUpdateOperationsInput | number
    id_user?: NullableIntFieldUpdateOperationsInput | number | null
    purchase_detail?: purchase_detailUncheckedUpdateManyWithoutTicket_purchaseNestedInput
  }

  export type ticket_purchaseCreateManyInput = {
    id_ticketpurchase?: number
    purchase_date?: Date | string
    buyer_name: string
    buyer_email: string
    buyer_phone: string
    total_price: number
    id_schedule: number
    id_user?: number | null
  }

  export type ticket_purchaseUpdateManyMutationInput = {
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer_name?: StringFieldUpdateOperationsInput | string
    buyer_email?: StringFieldUpdateOperationsInput | string
    buyer_phone?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
  }

  export type ticket_purchaseUncheckedUpdateManyInput = {
    id_ticketpurchase?: IntFieldUpdateOperationsInput | number
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer_name?: StringFieldUpdateOperationsInput | string
    buyer_email?: StringFieldUpdateOperationsInput | string
    buyer_phone?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
    id_schedule?: IntFieldUpdateOperationsInput | number
    id_user?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type purchase_detailCreateInput = {
    buyer_name: string
    buyer_email: string
    buyer_phone: string
    total_price: number
    seat: seatCreateNestedOneWithoutPurchase_detailInput
    ticket_purchase: ticket_purchaseCreateNestedOneWithoutPurchase_detailInput
    seat_schedule?: seat_scheduleCreateNestedManyWithoutPurchase_detailInput
  }

  export type purchase_detailUncheckedCreateInput = {
    id_purchasedetail?: number
    buyer_name: string
    buyer_email: string
    buyer_phone: string
    total_price: number
    id_seat: number
    id_ticket_purchase: number
    seat_schedule?: seat_scheduleUncheckedCreateNestedManyWithoutPurchase_detailInput
  }

  export type purchase_detailUpdateInput = {
    buyer_name?: StringFieldUpdateOperationsInput | string
    buyer_email?: StringFieldUpdateOperationsInput | string
    buyer_phone?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
    seat?: seatUpdateOneRequiredWithoutPurchase_detailNestedInput
    ticket_purchase?: ticket_purchaseUpdateOneRequiredWithoutPurchase_detailNestedInput
    seat_schedule?: seat_scheduleUpdateManyWithoutPurchase_detailNestedInput
  }

  export type purchase_detailUncheckedUpdateInput = {
    id_purchasedetail?: IntFieldUpdateOperationsInput | number
    buyer_name?: StringFieldUpdateOperationsInput | string
    buyer_email?: StringFieldUpdateOperationsInput | string
    buyer_phone?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
    id_seat?: IntFieldUpdateOperationsInput | number
    id_ticket_purchase?: IntFieldUpdateOperationsInput | number
    seat_schedule?: seat_scheduleUncheckedUpdateManyWithoutPurchase_detailNestedInput
  }

  export type purchase_detailCreateManyInput = {
    id_purchasedetail?: number
    buyer_name: string
    buyer_email: string
    buyer_phone: string
    total_price: number
    id_seat: number
    id_ticket_purchase: number
  }

  export type purchase_detailUpdateManyMutationInput = {
    buyer_name?: StringFieldUpdateOperationsInput | string
    buyer_email?: StringFieldUpdateOperationsInput | string
    buyer_phone?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
  }

  export type purchase_detailUncheckedUpdateManyInput = {
    id_purchasedetail?: IntFieldUpdateOperationsInput | number
    buyer_name?: StringFieldUpdateOperationsInput | string
    buyer_email?: StringFieldUpdateOperationsInput | string
    buyer_phone?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
    id_seat?: IntFieldUpdateOperationsInput | number
    id_ticket_purchase?: IntFieldUpdateOperationsInput | number
  }

  export type trainCreateInput = {
    train_name: string
    description: string
    train_picture?: string
    train_status?: $Enums.train_status
    carriage?: carriageCreateNestedManyWithoutTrainInput
    schedule?: scheduleCreateNestedManyWithoutTrainInput
  }

  export type trainUncheckedCreateInput = {
    id_train?: number
    train_name: string
    description: string
    train_picture?: string
    train_status?: $Enums.train_status
    carriage?: carriageUncheckedCreateNestedManyWithoutTrainInput
    schedule?: scheduleUncheckedCreateNestedManyWithoutTrainInput
  }

  export type trainUpdateInput = {
    train_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    train_picture?: StringFieldUpdateOperationsInput | string
    train_status?: Enumtrain_statusFieldUpdateOperationsInput | $Enums.train_status
    carriage?: carriageUpdateManyWithoutTrainNestedInput
    schedule?: scheduleUpdateManyWithoutTrainNestedInput
  }

  export type trainUncheckedUpdateInput = {
    id_train?: IntFieldUpdateOperationsInput | number
    train_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    train_picture?: StringFieldUpdateOperationsInput | string
    train_status?: Enumtrain_statusFieldUpdateOperationsInput | $Enums.train_status
    carriage?: carriageUncheckedUpdateManyWithoutTrainNestedInput
    schedule?: scheduleUncheckedUpdateManyWithoutTrainNestedInput
  }

  export type trainCreateManyInput = {
    id_train?: number
    train_name: string
    description: string
    train_picture?: string
    train_status?: $Enums.train_status
  }

  export type trainUpdateManyMutationInput = {
    train_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    train_picture?: StringFieldUpdateOperationsInput | string
    train_status?: Enumtrain_statusFieldUpdateOperationsInput | $Enums.train_status
  }

  export type trainUncheckedUpdateManyInput = {
    id_train?: IntFieldUpdateOperationsInput | number
    train_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    train_picture?: StringFieldUpdateOperationsInput | string
    train_status?: Enumtrain_statusFieldUpdateOperationsInput | $Enums.train_status
  }

  export type userCreateInput = {
    username: string
    email: string
    password: string
    role: $Enums.user_role
    profile_picture?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string
    nik: string
    phone?: string
    ticket_purchase?: ticket_purchaseCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id_user?: number
    username: string
    email: string
    password: string
    role: $Enums.user_role
    profile_picture?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string
    nik: string
    phone?: string
    ticket_purchase?: ticket_purchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    profile_picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    ticket_purchase?: ticket_purchaseUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    profile_picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    ticket_purchase?: ticket_purchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id_user?: number
    username: string
    email: string
    password: string
    role: $Enums.user_role
    profile_picture?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string
    nik: string
    phone?: string
  }

  export type userUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    profile_picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    profile_picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Enumcarriage_categoryFilter<$PrismaModel = never> = {
    equals?: $Enums.carriage_category | Enumcarriage_categoryFieldRefInput<$PrismaModel>
    in?: $Enums.carriage_category[]
    notIn?: $Enums.carriage_category[]
    not?: NestedEnumcarriage_categoryFilter<$PrismaModel> | $Enums.carriage_category
  }

  export type TrainScalarRelationFilter = {
    is?: trainWhereInput
    isNot?: trainWhereInput
  }

  export type SeatListRelationFilter = {
    every?: seatWhereInput
    some?: seatWhereInput
    none?: seatWhereInput
  }

  export type seatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type carriageOrderByRelevanceInput = {
    fields: carriageOrderByRelevanceFieldEnum | carriageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type carriageCountOrderByAggregateInput = {
    id_carriage?: SortOrder
    carriage_name?: SortOrder
    quota?: SortOrder
    carriage_category?: SortOrder
    id_train?: SortOrder
  }

  export type carriageAvgOrderByAggregateInput = {
    id_carriage?: SortOrder
    quota?: SortOrder
    id_train?: SortOrder
  }

  export type carriageMaxOrderByAggregateInput = {
    id_carriage?: SortOrder
    carriage_name?: SortOrder
    quota?: SortOrder
    carriage_category?: SortOrder
    id_train?: SortOrder
  }

  export type carriageMinOrderByAggregateInput = {
    id_carriage?: SortOrder
    carriage_name?: SortOrder
    quota?: SortOrder
    carriage_category?: SortOrder
    id_train?: SortOrder
  }

  export type carriageSumOrderByAggregateInput = {
    id_carriage?: SortOrder
    quota?: SortOrder
    id_train?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumcarriage_categoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.carriage_category | Enumcarriage_categoryFieldRefInput<$PrismaModel>
    in?: $Enums.carriage_category[]
    notIn?: $Enums.carriage_category[]
    not?: NestedEnumcarriage_categoryWithAggregatesFilter<$PrismaModel> | $Enums.carriage_category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcarriage_categoryFilter<$PrismaModel>
    _max?: NestedEnumcarriage_categoryFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumstatusFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[]
    notIn?: $Enums.status[]
    not?: NestedEnumstatusFilter<$PrismaModel> | $Enums.status
  }

  export type Seat_scheduleListRelationFilter = {
    every?: seat_scheduleWhereInput
    some?: seat_scheduleWhereInput
    none?: seat_scheduleWhereInput
  }

  export type Ticket_purchaseListRelationFilter = {
    every?: ticket_purchaseWhereInput
    some?: ticket_purchaseWhereInput
    none?: ticket_purchaseWhereInput
  }

  export type seat_scheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ticket_purchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type scheduleOrderByRelevanceInput = {
    fields: scheduleOrderByRelevanceFieldEnum | scheduleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type scheduleCountOrderByAggregateInput = {
    id_schedule?: SortOrder
    schedule_name?: SortOrder
    departure?: SortOrder
    destination?: SortOrder
    departure_date?: SortOrder
    arrival_date?: SortOrder
    price?: SortOrder
    quota_total?: SortOrder
    status?: SortOrder
    id_train?: SortOrder
  }

  export type scheduleAvgOrderByAggregateInput = {
    id_schedule?: SortOrder
    price?: SortOrder
    quota_total?: SortOrder
    id_train?: SortOrder
  }

  export type scheduleMaxOrderByAggregateInput = {
    id_schedule?: SortOrder
    schedule_name?: SortOrder
    departure?: SortOrder
    destination?: SortOrder
    departure_date?: SortOrder
    arrival_date?: SortOrder
    price?: SortOrder
    quota_total?: SortOrder
    status?: SortOrder
    id_train?: SortOrder
  }

  export type scheduleMinOrderByAggregateInput = {
    id_schedule?: SortOrder
    schedule_name?: SortOrder
    departure?: SortOrder
    destination?: SortOrder
    departure_date?: SortOrder
    arrival_date?: SortOrder
    price?: SortOrder
    quota_total?: SortOrder
    status?: SortOrder
    id_train?: SortOrder
  }

  export type scheduleSumOrderByAggregateInput = {
    id_schedule?: SortOrder
    price?: SortOrder
    quota_total?: SortOrder
    id_train?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumstatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[]
    notIn?: $Enums.status[]
    not?: NestedEnumstatusWithAggregatesFilter<$PrismaModel> | $Enums.status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusFilter<$PrismaModel>
    _max?: NestedEnumstatusFilter<$PrismaModel>
  }

  export type Purchase_detailListRelationFilter = {
    every?: purchase_detailWhereInput
    some?: purchase_detailWhereInput
    none?: purchase_detailWhereInput
  }

  export type CarriageScalarRelationFilter = {
    is?: carriageWhereInput
    isNot?: carriageWhereInput
  }

  export type purchase_detailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type seatOrderByRelevanceInput = {
    fields: seatOrderByRelevanceFieldEnum | seatOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type seatCountOrderByAggregateInput = {
    id_seat?: SortOrder
    seat_num?: SortOrder
    id_carriage?: SortOrder
  }

  export type seatAvgOrderByAggregateInput = {
    id_seat?: SortOrder
    id_carriage?: SortOrder
  }

  export type seatMaxOrderByAggregateInput = {
    id_seat?: SortOrder
    seat_num?: SortOrder
    id_carriage?: SortOrder
  }

  export type seatMinOrderByAggregateInput = {
    id_seat?: SortOrder
    seat_num?: SortOrder
    id_carriage?: SortOrder
  }

  export type seatSumOrderByAggregateInput = {
    id_seat?: SortOrder
    id_carriage?: SortOrder
  }

  export type Enumseatschedule_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.seatschedule_status | Enumseatschedule_statusFieldRefInput<$PrismaModel>
    in?: $Enums.seatschedule_status[]
    notIn?: $Enums.seatschedule_status[]
    not?: NestedEnumseatschedule_statusFilter<$PrismaModel> | $Enums.seatschedule_status
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Purchase_detailNullableScalarRelationFilter = {
    is?: purchase_detailWhereInput | null
    isNot?: purchase_detailWhereInput | null
  }

  export type ScheduleScalarRelationFilter = {
    is?: scheduleWhereInput
    isNot?: scheduleWhereInput
  }

  export type SeatScalarRelationFilter = {
    is?: seatWhereInput
    isNot?: seatWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type seat_scheduleId_seatId_scheduleCompoundUniqueInput = {
    id_seat: number
    id_schedule: number
  }

  export type seat_scheduleCountOrderByAggregateInput = {
    id_seat_schedule?: SortOrder
    id_seat?: SortOrder
    id_schedule?: SortOrder
    seatschedule_status?: SortOrder
    purchaseDetailId_purchasedetail?: SortOrder
  }

  export type seat_scheduleAvgOrderByAggregateInput = {
    id_seat_schedule?: SortOrder
    id_seat?: SortOrder
    id_schedule?: SortOrder
    purchaseDetailId_purchasedetail?: SortOrder
  }

  export type seat_scheduleMaxOrderByAggregateInput = {
    id_seat_schedule?: SortOrder
    id_seat?: SortOrder
    id_schedule?: SortOrder
    seatschedule_status?: SortOrder
    purchaseDetailId_purchasedetail?: SortOrder
  }

  export type seat_scheduleMinOrderByAggregateInput = {
    id_seat_schedule?: SortOrder
    id_seat?: SortOrder
    id_schedule?: SortOrder
    seatschedule_status?: SortOrder
    purchaseDetailId_purchasedetail?: SortOrder
  }

  export type seat_scheduleSumOrderByAggregateInput = {
    id_seat_schedule?: SortOrder
    id_seat?: SortOrder
    id_schedule?: SortOrder
    purchaseDetailId_purchasedetail?: SortOrder
  }

  export type Enumseatschedule_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.seatschedule_status | Enumseatschedule_statusFieldRefInput<$PrismaModel>
    in?: $Enums.seatschedule_status[]
    notIn?: $Enums.seatschedule_status[]
    not?: NestedEnumseatschedule_statusWithAggregatesFilter<$PrismaModel> | $Enums.seatschedule_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumseatschedule_statusFilter<$PrismaModel>
    _max?: NestedEnumseatschedule_statusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type ticket_purchaseOrderByRelevanceInput = {
    fields: ticket_purchaseOrderByRelevanceFieldEnum | ticket_purchaseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ticket_purchaseCountOrderByAggregateInput = {
    id_ticketpurchase?: SortOrder
    purchase_date?: SortOrder
    buyer_name?: SortOrder
    buyer_email?: SortOrder
    buyer_phone?: SortOrder
    total_price?: SortOrder
    id_schedule?: SortOrder
    id_user?: SortOrder
  }

  export type ticket_purchaseAvgOrderByAggregateInput = {
    id_ticketpurchase?: SortOrder
    total_price?: SortOrder
    id_schedule?: SortOrder
    id_user?: SortOrder
  }

  export type ticket_purchaseMaxOrderByAggregateInput = {
    id_ticketpurchase?: SortOrder
    purchase_date?: SortOrder
    buyer_name?: SortOrder
    buyer_email?: SortOrder
    buyer_phone?: SortOrder
    total_price?: SortOrder
    id_schedule?: SortOrder
    id_user?: SortOrder
  }

  export type ticket_purchaseMinOrderByAggregateInput = {
    id_ticketpurchase?: SortOrder
    purchase_date?: SortOrder
    buyer_name?: SortOrder
    buyer_email?: SortOrder
    buyer_phone?: SortOrder
    total_price?: SortOrder
    id_schedule?: SortOrder
    id_user?: SortOrder
  }

  export type ticket_purchaseSumOrderByAggregateInput = {
    id_ticketpurchase?: SortOrder
    total_price?: SortOrder
    id_schedule?: SortOrder
    id_user?: SortOrder
  }

  export type Ticket_purchaseScalarRelationFilter = {
    is?: ticket_purchaseWhereInput
    isNot?: ticket_purchaseWhereInput
  }

  export type purchase_detailOrderByRelevanceInput = {
    fields: purchase_detailOrderByRelevanceFieldEnum | purchase_detailOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type purchase_detailCountOrderByAggregateInput = {
    id_purchasedetail?: SortOrder
    buyer_name?: SortOrder
    buyer_email?: SortOrder
    buyer_phone?: SortOrder
    total_price?: SortOrder
    id_seat?: SortOrder
    id_ticket_purchase?: SortOrder
  }

  export type purchase_detailAvgOrderByAggregateInput = {
    id_purchasedetail?: SortOrder
    total_price?: SortOrder
    id_seat?: SortOrder
    id_ticket_purchase?: SortOrder
  }

  export type purchase_detailMaxOrderByAggregateInput = {
    id_purchasedetail?: SortOrder
    buyer_name?: SortOrder
    buyer_email?: SortOrder
    buyer_phone?: SortOrder
    total_price?: SortOrder
    id_seat?: SortOrder
    id_ticket_purchase?: SortOrder
  }

  export type purchase_detailMinOrderByAggregateInput = {
    id_purchasedetail?: SortOrder
    buyer_name?: SortOrder
    buyer_email?: SortOrder
    buyer_phone?: SortOrder
    total_price?: SortOrder
    id_seat?: SortOrder
    id_ticket_purchase?: SortOrder
  }

  export type purchase_detailSumOrderByAggregateInput = {
    id_purchasedetail?: SortOrder
    total_price?: SortOrder
    id_seat?: SortOrder
    id_ticket_purchase?: SortOrder
  }

  export type Enumtrain_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.train_status | Enumtrain_statusFieldRefInput<$PrismaModel>
    in?: $Enums.train_status[]
    notIn?: $Enums.train_status[]
    not?: NestedEnumtrain_statusFilter<$PrismaModel> | $Enums.train_status
  }

  export type CarriageListRelationFilter = {
    every?: carriageWhereInput
    some?: carriageWhereInput
    none?: carriageWhereInput
  }

  export type ScheduleListRelationFilter = {
    every?: scheduleWhereInput
    some?: scheduleWhereInput
    none?: scheduleWhereInput
  }

  export type carriageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type scheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type trainOrderByRelevanceInput = {
    fields: trainOrderByRelevanceFieldEnum | trainOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type trainCountOrderByAggregateInput = {
    id_train?: SortOrder
    train_name?: SortOrder
    description?: SortOrder
    train_picture?: SortOrder
    train_status?: SortOrder
  }

  export type trainAvgOrderByAggregateInput = {
    id_train?: SortOrder
  }

  export type trainMaxOrderByAggregateInput = {
    id_train?: SortOrder
    train_name?: SortOrder
    description?: SortOrder
    train_picture?: SortOrder
    train_status?: SortOrder
  }

  export type trainMinOrderByAggregateInput = {
    id_train?: SortOrder
    train_name?: SortOrder
    description?: SortOrder
    train_picture?: SortOrder
    train_status?: SortOrder
  }

  export type trainSumOrderByAggregateInput = {
    id_train?: SortOrder
  }

  export type Enumtrain_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.train_status | Enumtrain_statusFieldRefInput<$PrismaModel>
    in?: $Enums.train_status[]
    notIn?: $Enums.train_status[]
    not?: NestedEnumtrain_statusWithAggregatesFilter<$PrismaModel> | $Enums.train_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtrain_statusFilter<$PrismaModel>
    _max?: NestedEnumtrain_statusFilter<$PrismaModel>
  }

  export type Enumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id_user?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profile_picture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    address?: SortOrder
    nik?: SortOrder
    phone?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id_user?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id_user?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profile_picture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    address?: SortOrder
    nik?: SortOrder
    phone?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id_user?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profile_picture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    address?: SortOrder
    nik?: SortOrder
    phone?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id_user?: SortOrder
  }

  export type Enumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type trainCreateNestedOneWithoutCarriageInput = {
    create?: XOR<trainCreateWithoutCarriageInput, trainUncheckedCreateWithoutCarriageInput>
    connectOrCreate?: trainCreateOrConnectWithoutCarriageInput
    connect?: trainWhereUniqueInput
  }

  export type seatCreateNestedManyWithoutCarriageInput = {
    create?: XOR<seatCreateWithoutCarriageInput, seatUncheckedCreateWithoutCarriageInput> | seatCreateWithoutCarriageInput[] | seatUncheckedCreateWithoutCarriageInput[]
    connectOrCreate?: seatCreateOrConnectWithoutCarriageInput | seatCreateOrConnectWithoutCarriageInput[]
    createMany?: seatCreateManyCarriageInputEnvelope
    connect?: seatWhereUniqueInput | seatWhereUniqueInput[]
  }

  export type seatUncheckedCreateNestedManyWithoutCarriageInput = {
    create?: XOR<seatCreateWithoutCarriageInput, seatUncheckedCreateWithoutCarriageInput> | seatCreateWithoutCarriageInput[] | seatUncheckedCreateWithoutCarriageInput[]
    connectOrCreate?: seatCreateOrConnectWithoutCarriageInput | seatCreateOrConnectWithoutCarriageInput[]
    createMany?: seatCreateManyCarriageInputEnvelope
    connect?: seatWhereUniqueInput | seatWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Enumcarriage_categoryFieldUpdateOperationsInput = {
    set?: $Enums.carriage_category
  }

  export type trainUpdateOneRequiredWithoutCarriageNestedInput = {
    create?: XOR<trainCreateWithoutCarriageInput, trainUncheckedCreateWithoutCarriageInput>
    connectOrCreate?: trainCreateOrConnectWithoutCarriageInput
    upsert?: trainUpsertWithoutCarriageInput
    connect?: trainWhereUniqueInput
    update?: XOR<XOR<trainUpdateToOneWithWhereWithoutCarriageInput, trainUpdateWithoutCarriageInput>, trainUncheckedUpdateWithoutCarriageInput>
  }

  export type seatUpdateManyWithoutCarriageNestedInput = {
    create?: XOR<seatCreateWithoutCarriageInput, seatUncheckedCreateWithoutCarriageInput> | seatCreateWithoutCarriageInput[] | seatUncheckedCreateWithoutCarriageInput[]
    connectOrCreate?: seatCreateOrConnectWithoutCarriageInput | seatCreateOrConnectWithoutCarriageInput[]
    upsert?: seatUpsertWithWhereUniqueWithoutCarriageInput | seatUpsertWithWhereUniqueWithoutCarriageInput[]
    createMany?: seatCreateManyCarriageInputEnvelope
    set?: seatWhereUniqueInput | seatWhereUniqueInput[]
    disconnect?: seatWhereUniqueInput | seatWhereUniqueInput[]
    delete?: seatWhereUniqueInput | seatWhereUniqueInput[]
    connect?: seatWhereUniqueInput | seatWhereUniqueInput[]
    update?: seatUpdateWithWhereUniqueWithoutCarriageInput | seatUpdateWithWhereUniqueWithoutCarriageInput[]
    updateMany?: seatUpdateManyWithWhereWithoutCarriageInput | seatUpdateManyWithWhereWithoutCarriageInput[]
    deleteMany?: seatScalarWhereInput | seatScalarWhereInput[]
  }

  export type seatUncheckedUpdateManyWithoutCarriageNestedInput = {
    create?: XOR<seatCreateWithoutCarriageInput, seatUncheckedCreateWithoutCarriageInput> | seatCreateWithoutCarriageInput[] | seatUncheckedCreateWithoutCarriageInput[]
    connectOrCreate?: seatCreateOrConnectWithoutCarriageInput | seatCreateOrConnectWithoutCarriageInput[]
    upsert?: seatUpsertWithWhereUniqueWithoutCarriageInput | seatUpsertWithWhereUniqueWithoutCarriageInput[]
    createMany?: seatCreateManyCarriageInputEnvelope
    set?: seatWhereUniqueInput | seatWhereUniqueInput[]
    disconnect?: seatWhereUniqueInput | seatWhereUniqueInput[]
    delete?: seatWhereUniqueInput | seatWhereUniqueInput[]
    connect?: seatWhereUniqueInput | seatWhereUniqueInput[]
    update?: seatUpdateWithWhereUniqueWithoutCarriageInput | seatUpdateWithWhereUniqueWithoutCarriageInput[]
    updateMany?: seatUpdateManyWithWhereWithoutCarriageInput | seatUpdateManyWithWhereWithoutCarriageInput[]
    deleteMany?: seatScalarWhereInput | seatScalarWhereInput[]
  }

  export type trainCreateNestedOneWithoutScheduleInput = {
    create?: XOR<trainCreateWithoutScheduleInput, trainUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: trainCreateOrConnectWithoutScheduleInput
    connect?: trainWhereUniqueInput
  }

  export type seat_scheduleCreateNestedManyWithoutScheduleInput = {
    create?: XOR<seat_scheduleCreateWithoutScheduleInput, seat_scheduleUncheckedCreateWithoutScheduleInput> | seat_scheduleCreateWithoutScheduleInput[] | seat_scheduleUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: seat_scheduleCreateOrConnectWithoutScheduleInput | seat_scheduleCreateOrConnectWithoutScheduleInput[]
    createMany?: seat_scheduleCreateManyScheduleInputEnvelope
    connect?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
  }

  export type ticket_purchaseCreateNestedManyWithoutScheduleInput = {
    create?: XOR<ticket_purchaseCreateWithoutScheduleInput, ticket_purchaseUncheckedCreateWithoutScheduleInput> | ticket_purchaseCreateWithoutScheduleInput[] | ticket_purchaseUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: ticket_purchaseCreateOrConnectWithoutScheduleInput | ticket_purchaseCreateOrConnectWithoutScheduleInput[]
    createMany?: ticket_purchaseCreateManyScheduleInputEnvelope
    connect?: ticket_purchaseWhereUniqueInput | ticket_purchaseWhereUniqueInput[]
  }

  export type seat_scheduleUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<seat_scheduleCreateWithoutScheduleInput, seat_scheduleUncheckedCreateWithoutScheduleInput> | seat_scheduleCreateWithoutScheduleInput[] | seat_scheduleUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: seat_scheduleCreateOrConnectWithoutScheduleInput | seat_scheduleCreateOrConnectWithoutScheduleInput[]
    createMany?: seat_scheduleCreateManyScheduleInputEnvelope
    connect?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
  }

  export type ticket_purchaseUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<ticket_purchaseCreateWithoutScheduleInput, ticket_purchaseUncheckedCreateWithoutScheduleInput> | ticket_purchaseCreateWithoutScheduleInput[] | ticket_purchaseUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: ticket_purchaseCreateOrConnectWithoutScheduleInput | ticket_purchaseCreateOrConnectWithoutScheduleInput[]
    createMany?: ticket_purchaseCreateManyScheduleInputEnvelope
    connect?: ticket_purchaseWhereUniqueInput | ticket_purchaseWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumstatusFieldUpdateOperationsInput = {
    set?: $Enums.status
  }

  export type trainUpdateOneRequiredWithoutScheduleNestedInput = {
    create?: XOR<trainCreateWithoutScheduleInput, trainUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: trainCreateOrConnectWithoutScheduleInput
    upsert?: trainUpsertWithoutScheduleInput
    connect?: trainWhereUniqueInput
    update?: XOR<XOR<trainUpdateToOneWithWhereWithoutScheduleInput, trainUpdateWithoutScheduleInput>, trainUncheckedUpdateWithoutScheduleInput>
  }

  export type seat_scheduleUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<seat_scheduleCreateWithoutScheduleInput, seat_scheduleUncheckedCreateWithoutScheduleInput> | seat_scheduleCreateWithoutScheduleInput[] | seat_scheduleUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: seat_scheduleCreateOrConnectWithoutScheduleInput | seat_scheduleCreateOrConnectWithoutScheduleInput[]
    upsert?: seat_scheduleUpsertWithWhereUniqueWithoutScheduleInput | seat_scheduleUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: seat_scheduleCreateManyScheduleInputEnvelope
    set?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
    disconnect?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
    delete?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
    connect?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
    update?: seat_scheduleUpdateWithWhereUniqueWithoutScheduleInput | seat_scheduleUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: seat_scheduleUpdateManyWithWhereWithoutScheduleInput | seat_scheduleUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: seat_scheduleScalarWhereInput | seat_scheduleScalarWhereInput[]
  }

  export type ticket_purchaseUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<ticket_purchaseCreateWithoutScheduleInput, ticket_purchaseUncheckedCreateWithoutScheduleInput> | ticket_purchaseCreateWithoutScheduleInput[] | ticket_purchaseUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: ticket_purchaseCreateOrConnectWithoutScheduleInput | ticket_purchaseCreateOrConnectWithoutScheduleInput[]
    upsert?: ticket_purchaseUpsertWithWhereUniqueWithoutScheduleInput | ticket_purchaseUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: ticket_purchaseCreateManyScheduleInputEnvelope
    set?: ticket_purchaseWhereUniqueInput | ticket_purchaseWhereUniqueInput[]
    disconnect?: ticket_purchaseWhereUniqueInput | ticket_purchaseWhereUniqueInput[]
    delete?: ticket_purchaseWhereUniqueInput | ticket_purchaseWhereUniqueInput[]
    connect?: ticket_purchaseWhereUniqueInput | ticket_purchaseWhereUniqueInput[]
    update?: ticket_purchaseUpdateWithWhereUniqueWithoutScheduleInput | ticket_purchaseUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: ticket_purchaseUpdateManyWithWhereWithoutScheduleInput | ticket_purchaseUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: ticket_purchaseScalarWhereInput | ticket_purchaseScalarWhereInput[]
  }

  export type seat_scheduleUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<seat_scheduleCreateWithoutScheduleInput, seat_scheduleUncheckedCreateWithoutScheduleInput> | seat_scheduleCreateWithoutScheduleInput[] | seat_scheduleUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: seat_scheduleCreateOrConnectWithoutScheduleInput | seat_scheduleCreateOrConnectWithoutScheduleInput[]
    upsert?: seat_scheduleUpsertWithWhereUniqueWithoutScheduleInput | seat_scheduleUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: seat_scheduleCreateManyScheduleInputEnvelope
    set?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
    disconnect?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
    delete?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
    connect?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
    update?: seat_scheduleUpdateWithWhereUniqueWithoutScheduleInput | seat_scheduleUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: seat_scheduleUpdateManyWithWhereWithoutScheduleInput | seat_scheduleUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: seat_scheduleScalarWhereInput | seat_scheduleScalarWhereInput[]
  }

  export type ticket_purchaseUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<ticket_purchaseCreateWithoutScheduleInput, ticket_purchaseUncheckedCreateWithoutScheduleInput> | ticket_purchaseCreateWithoutScheduleInput[] | ticket_purchaseUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: ticket_purchaseCreateOrConnectWithoutScheduleInput | ticket_purchaseCreateOrConnectWithoutScheduleInput[]
    upsert?: ticket_purchaseUpsertWithWhereUniqueWithoutScheduleInput | ticket_purchaseUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: ticket_purchaseCreateManyScheduleInputEnvelope
    set?: ticket_purchaseWhereUniqueInput | ticket_purchaseWhereUniqueInput[]
    disconnect?: ticket_purchaseWhereUniqueInput | ticket_purchaseWhereUniqueInput[]
    delete?: ticket_purchaseWhereUniqueInput | ticket_purchaseWhereUniqueInput[]
    connect?: ticket_purchaseWhereUniqueInput | ticket_purchaseWhereUniqueInput[]
    update?: ticket_purchaseUpdateWithWhereUniqueWithoutScheduleInput | ticket_purchaseUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: ticket_purchaseUpdateManyWithWhereWithoutScheduleInput | ticket_purchaseUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: ticket_purchaseScalarWhereInput | ticket_purchaseScalarWhereInput[]
  }

  export type purchase_detailCreateNestedManyWithoutSeatInput = {
    create?: XOR<purchase_detailCreateWithoutSeatInput, purchase_detailUncheckedCreateWithoutSeatInput> | purchase_detailCreateWithoutSeatInput[] | purchase_detailUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: purchase_detailCreateOrConnectWithoutSeatInput | purchase_detailCreateOrConnectWithoutSeatInput[]
    createMany?: purchase_detailCreateManySeatInputEnvelope
    connect?: purchase_detailWhereUniqueInput | purchase_detailWhereUniqueInput[]
  }

  export type carriageCreateNestedOneWithoutSeatInput = {
    create?: XOR<carriageCreateWithoutSeatInput, carriageUncheckedCreateWithoutSeatInput>
    connectOrCreate?: carriageCreateOrConnectWithoutSeatInput
    connect?: carriageWhereUniqueInput
  }

  export type seat_scheduleCreateNestedManyWithoutSeatInput = {
    create?: XOR<seat_scheduleCreateWithoutSeatInput, seat_scheduleUncheckedCreateWithoutSeatInput> | seat_scheduleCreateWithoutSeatInput[] | seat_scheduleUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: seat_scheduleCreateOrConnectWithoutSeatInput | seat_scheduleCreateOrConnectWithoutSeatInput[]
    createMany?: seat_scheduleCreateManySeatInputEnvelope
    connect?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
  }

  export type purchase_detailUncheckedCreateNestedManyWithoutSeatInput = {
    create?: XOR<purchase_detailCreateWithoutSeatInput, purchase_detailUncheckedCreateWithoutSeatInput> | purchase_detailCreateWithoutSeatInput[] | purchase_detailUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: purchase_detailCreateOrConnectWithoutSeatInput | purchase_detailCreateOrConnectWithoutSeatInput[]
    createMany?: purchase_detailCreateManySeatInputEnvelope
    connect?: purchase_detailWhereUniqueInput | purchase_detailWhereUniqueInput[]
  }

  export type seat_scheduleUncheckedCreateNestedManyWithoutSeatInput = {
    create?: XOR<seat_scheduleCreateWithoutSeatInput, seat_scheduleUncheckedCreateWithoutSeatInput> | seat_scheduleCreateWithoutSeatInput[] | seat_scheduleUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: seat_scheduleCreateOrConnectWithoutSeatInput | seat_scheduleCreateOrConnectWithoutSeatInput[]
    createMany?: seat_scheduleCreateManySeatInputEnvelope
    connect?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
  }

  export type purchase_detailUpdateManyWithoutSeatNestedInput = {
    create?: XOR<purchase_detailCreateWithoutSeatInput, purchase_detailUncheckedCreateWithoutSeatInput> | purchase_detailCreateWithoutSeatInput[] | purchase_detailUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: purchase_detailCreateOrConnectWithoutSeatInput | purchase_detailCreateOrConnectWithoutSeatInput[]
    upsert?: purchase_detailUpsertWithWhereUniqueWithoutSeatInput | purchase_detailUpsertWithWhereUniqueWithoutSeatInput[]
    createMany?: purchase_detailCreateManySeatInputEnvelope
    set?: purchase_detailWhereUniqueInput | purchase_detailWhereUniqueInput[]
    disconnect?: purchase_detailWhereUniqueInput | purchase_detailWhereUniqueInput[]
    delete?: purchase_detailWhereUniqueInput | purchase_detailWhereUniqueInput[]
    connect?: purchase_detailWhereUniqueInput | purchase_detailWhereUniqueInput[]
    update?: purchase_detailUpdateWithWhereUniqueWithoutSeatInput | purchase_detailUpdateWithWhereUniqueWithoutSeatInput[]
    updateMany?: purchase_detailUpdateManyWithWhereWithoutSeatInput | purchase_detailUpdateManyWithWhereWithoutSeatInput[]
    deleteMany?: purchase_detailScalarWhereInput | purchase_detailScalarWhereInput[]
  }

  export type carriageUpdateOneRequiredWithoutSeatNestedInput = {
    create?: XOR<carriageCreateWithoutSeatInput, carriageUncheckedCreateWithoutSeatInput>
    connectOrCreate?: carriageCreateOrConnectWithoutSeatInput
    upsert?: carriageUpsertWithoutSeatInput
    connect?: carriageWhereUniqueInput
    update?: XOR<XOR<carriageUpdateToOneWithWhereWithoutSeatInput, carriageUpdateWithoutSeatInput>, carriageUncheckedUpdateWithoutSeatInput>
  }

  export type seat_scheduleUpdateManyWithoutSeatNestedInput = {
    create?: XOR<seat_scheduleCreateWithoutSeatInput, seat_scheduleUncheckedCreateWithoutSeatInput> | seat_scheduleCreateWithoutSeatInput[] | seat_scheduleUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: seat_scheduleCreateOrConnectWithoutSeatInput | seat_scheduleCreateOrConnectWithoutSeatInput[]
    upsert?: seat_scheduleUpsertWithWhereUniqueWithoutSeatInput | seat_scheduleUpsertWithWhereUniqueWithoutSeatInput[]
    createMany?: seat_scheduleCreateManySeatInputEnvelope
    set?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
    disconnect?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
    delete?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
    connect?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
    update?: seat_scheduleUpdateWithWhereUniqueWithoutSeatInput | seat_scheduleUpdateWithWhereUniqueWithoutSeatInput[]
    updateMany?: seat_scheduleUpdateManyWithWhereWithoutSeatInput | seat_scheduleUpdateManyWithWhereWithoutSeatInput[]
    deleteMany?: seat_scheduleScalarWhereInput | seat_scheduleScalarWhereInput[]
  }

  export type purchase_detailUncheckedUpdateManyWithoutSeatNestedInput = {
    create?: XOR<purchase_detailCreateWithoutSeatInput, purchase_detailUncheckedCreateWithoutSeatInput> | purchase_detailCreateWithoutSeatInput[] | purchase_detailUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: purchase_detailCreateOrConnectWithoutSeatInput | purchase_detailCreateOrConnectWithoutSeatInput[]
    upsert?: purchase_detailUpsertWithWhereUniqueWithoutSeatInput | purchase_detailUpsertWithWhereUniqueWithoutSeatInput[]
    createMany?: purchase_detailCreateManySeatInputEnvelope
    set?: purchase_detailWhereUniqueInput | purchase_detailWhereUniqueInput[]
    disconnect?: purchase_detailWhereUniqueInput | purchase_detailWhereUniqueInput[]
    delete?: purchase_detailWhereUniqueInput | purchase_detailWhereUniqueInput[]
    connect?: purchase_detailWhereUniqueInput | purchase_detailWhereUniqueInput[]
    update?: purchase_detailUpdateWithWhereUniqueWithoutSeatInput | purchase_detailUpdateWithWhereUniqueWithoutSeatInput[]
    updateMany?: purchase_detailUpdateManyWithWhereWithoutSeatInput | purchase_detailUpdateManyWithWhereWithoutSeatInput[]
    deleteMany?: purchase_detailScalarWhereInput | purchase_detailScalarWhereInput[]
  }

  export type seat_scheduleUncheckedUpdateManyWithoutSeatNestedInput = {
    create?: XOR<seat_scheduleCreateWithoutSeatInput, seat_scheduleUncheckedCreateWithoutSeatInput> | seat_scheduleCreateWithoutSeatInput[] | seat_scheduleUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: seat_scheduleCreateOrConnectWithoutSeatInput | seat_scheduleCreateOrConnectWithoutSeatInput[]
    upsert?: seat_scheduleUpsertWithWhereUniqueWithoutSeatInput | seat_scheduleUpsertWithWhereUniqueWithoutSeatInput[]
    createMany?: seat_scheduleCreateManySeatInputEnvelope
    set?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
    disconnect?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
    delete?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
    connect?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
    update?: seat_scheduleUpdateWithWhereUniqueWithoutSeatInput | seat_scheduleUpdateWithWhereUniqueWithoutSeatInput[]
    updateMany?: seat_scheduleUpdateManyWithWhereWithoutSeatInput | seat_scheduleUpdateManyWithWhereWithoutSeatInput[]
    deleteMany?: seat_scheduleScalarWhereInput | seat_scheduleScalarWhereInput[]
  }

  export type purchase_detailCreateNestedOneWithoutSeat_scheduleInput = {
    create?: XOR<purchase_detailCreateWithoutSeat_scheduleInput, purchase_detailUncheckedCreateWithoutSeat_scheduleInput>
    connectOrCreate?: purchase_detailCreateOrConnectWithoutSeat_scheduleInput
    connect?: purchase_detailWhereUniqueInput
  }

  export type scheduleCreateNestedOneWithoutSeat_scheduleInput = {
    create?: XOR<scheduleCreateWithoutSeat_scheduleInput, scheduleUncheckedCreateWithoutSeat_scheduleInput>
    connectOrCreate?: scheduleCreateOrConnectWithoutSeat_scheduleInput
    connect?: scheduleWhereUniqueInput
  }

  export type seatCreateNestedOneWithoutSeat_scheduleInput = {
    create?: XOR<seatCreateWithoutSeat_scheduleInput, seatUncheckedCreateWithoutSeat_scheduleInput>
    connectOrCreate?: seatCreateOrConnectWithoutSeat_scheduleInput
    connect?: seatWhereUniqueInput
  }

  export type Enumseatschedule_statusFieldUpdateOperationsInput = {
    set?: $Enums.seatschedule_status
  }

  export type purchase_detailUpdateOneWithoutSeat_scheduleNestedInput = {
    create?: XOR<purchase_detailCreateWithoutSeat_scheduleInput, purchase_detailUncheckedCreateWithoutSeat_scheduleInput>
    connectOrCreate?: purchase_detailCreateOrConnectWithoutSeat_scheduleInput
    upsert?: purchase_detailUpsertWithoutSeat_scheduleInput
    disconnect?: purchase_detailWhereInput | boolean
    delete?: purchase_detailWhereInput | boolean
    connect?: purchase_detailWhereUniqueInput
    update?: XOR<XOR<purchase_detailUpdateToOneWithWhereWithoutSeat_scheduleInput, purchase_detailUpdateWithoutSeat_scheduleInput>, purchase_detailUncheckedUpdateWithoutSeat_scheduleInput>
  }

  export type scheduleUpdateOneRequiredWithoutSeat_scheduleNestedInput = {
    create?: XOR<scheduleCreateWithoutSeat_scheduleInput, scheduleUncheckedCreateWithoutSeat_scheduleInput>
    connectOrCreate?: scheduleCreateOrConnectWithoutSeat_scheduleInput
    upsert?: scheduleUpsertWithoutSeat_scheduleInput
    connect?: scheduleWhereUniqueInput
    update?: XOR<XOR<scheduleUpdateToOneWithWhereWithoutSeat_scheduleInput, scheduleUpdateWithoutSeat_scheduleInput>, scheduleUncheckedUpdateWithoutSeat_scheduleInput>
  }

  export type seatUpdateOneRequiredWithoutSeat_scheduleNestedInput = {
    create?: XOR<seatCreateWithoutSeat_scheduleInput, seatUncheckedCreateWithoutSeat_scheduleInput>
    connectOrCreate?: seatCreateOrConnectWithoutSeat_scheduleInput
    upsert?: seatUpsertWithoutSeat_scheduleInput
    connect?: seatWhereUniqueInput
    update?: XOR<XOR<seatUpdateToOneWithWhereWithoutSeat_scheduleInput, seatUpdateWithoutSeat_scheduleInput>, seatUncheckedUpdateWithoutSeat_scheduleInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type purchase_detailCreateNestedManyWithoutTicket_purchaseInput = {
    create?: XOR<purchase_detailCreateWithoutTicket_purchaseInput, purchase_detailUncheckedCreateWithoutTicket_purchaseInput> | purchase_detailCreateWithoutTicket_purchaseInput[] | purchase_detailUncheckedCreateWithoutTicket_purchaseInput[]
    connectOrCreate?: purchase_detailCreateOrConnectWithoutTicket_purchaseInput | purchase_detailCreateOrConnectWithoutTicket_purchaseInput[]
    createMany?: purchase_detailCreateManyTicket_purchaseInputEnvelope
    connect?: purchase_detailWhereUniqueInput | purchase_detailWhereUniqueInput[]
  }

  export type scheduleCreateNestedOneWithoutTicket_purchaseInput = {
    create?: XOR<scheduleCreateWithoutTicket_purchaseInput, scheduleUncheckedCreateWithoutTicket_purchaseInput>
    connectOrCreate?: scheduleCreateOrConnectWithoutTicket_purchaseInput
    connect?: scheduleWhereUniqueInput
  }

  export type userCreateNestedOneWithoutTicket_purchaseInput = {
    create?: XOR<userCreateWithoutTicket_purchaseInput, userUncheckedCreateWithoutTicket_purchaseInput>
    connectOrCreate?: userCreateOrConnectWithoutTicket_purchaseInput
    connect?: userWhereUniqueInput
  }

  export type purchase_detailUncheckedCreateNestedManyWithoutTicket_purchaseInput = {
    create?: XOR<purchase_detailCreateWithoutTicket_purchaseInput, purchase_detailUncheckedCreateWithoutTicket_purchaseInput> | purchase_detailCreateWithoutTicket_purchaseInput[] | purchase_detailUncheckedCreateWithoutTicket_purchaseInput[]
    connectOrCreate?: purchase_detailCreateOrConnectWithoutTicket_purchaseInput | purchase_detailCreateOrConnectWithoutTicket_purchaseInput[]
    createMany?: purchase_detailCreateManyTicket_purchaseInputEnvelope
    connect?: purchase_detailWhereUniqueInput | purchase_detailWhereUniqueInput[]
  }

  export type purchase_detailUpdateManyWithoutTicket_purchaseNestedInput = {
    create?: XOR<purchase_detailCreateWithoutTicket_purchaseInput, purchase_detailUncheckedCreateWithoutTicket_purchaseInput> | purchase_detailCreateWithoutTicket_purchaseInput[] | purchase_detailUncheckedCreateWithoutTicket_purchaseInput[]
    connectOrCreate?: purchase_detailCreateOrConnectWithoutTicket_purchaseInput | purchase_detailCreateOrConnectWithoutTicket_purchaseInput[]
    upsert?: purchase_detailUpsertWithWhereUniqueWithoutTicket_purchaseInput | purchase_detailUpsertWithWhereUniqueWithoutTicket_purchaseInput[]
    createMany?: purchase_detailCreateManyTicket_purchaseInputEnvelope
    set?: purchase_detailWhereUniqueInput | purchase_detailWhereUniqueInput[]
    disconnect?: purchase_detailWhereUniqueInput | purchase_detailWhereUniqueInput[]
    delete?: purchase_detailWhereUniqueInput | purchase_detailWhereUniqueInput[]
    connect?: purchase_detailWhereUniqueInput | purchase_detailWhereUniqueInput[]
    update?: purchase_detailUpdateWithWhereUniqueWithoutTicket_purchaseInput | purchase_detailUpdateWithWhereUniqueWithoutTicket_purchaseInput[]
    updateMany?: purchase_detailUpdateManyWithWhereWithoutTicket_purchaseInput | purchase_detailUpdateManyWithWhereWithoutTicket_purchaseInput[]
    deleteMany?: purchase_detailScalarWhereInput | purchase_detailScalarWhereInput[]
  }

  export type scheduleUpdateOneRequiredWithoutTicket_purchaseNestedInput = {
    create?: XOR<scheduleCreateWithoutTicket_purchaseInput, scheduleUncheckedCreateWithoutTicket_purchaseInput>
    connectOrCreate?: scheduleCreateOrConnectWithoutTicket_purchaseInput
    upsert?: scheduleUpsertWithoutTicket_purchaseInput
    connect?: scheduleWhereUniqueInput
    update?: XOR<XOR<scheduleUpdateToOneWithWhereWithoutTicket_purchaseInput, scheduleUpdateWithoutTicket_purchaseInput>, scheduleUncheckedUpdateWithoutTicket_purchaseInput>
  }

  export type userUpdateOneWithoutTicket_purchaseNestedInput = {
    create?: XOR<userCreateWithoutTicket_purchaseInput, userUncheckedCreateWithoutTicket_purchaseInput>
    connectOrCreate?: userCreateOrConnectWithoutTicket_purchaseInput
    upsert?: userUpsertWithoutTicket_purchaseInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutTicket_purchaseInput, userUpdateWithoutTicket_purchaseInput>, userUncheckedUpdateWithoutTicket_purchaseInput>
  }

  export type purchase_detailUncheckedUpdateManyWithoutTicket_purchaseNestedInput = {
    create?: XOR<purchase_detailCreateWithoutTicket_purchaseInput, purchase_detailUncheckedCreateWithoutTicket_purchaseInput> | purchase_detailCreateWithoutTicket_purchaseInput[] | purchase_detailUncheckedCreateWithoutTicket_purchaseInput[]
    connectOrCreate?: purchase_detailCreateOrConnectWithoutTicket_purchaseInput | purchase_detailCreateOrConnectWithoutTicket_purchaseInput[]
    upsert?: purchase_detailUpsertWithWhereUniqueWithoutTicket_purchaseInput | purchase_detailUpsertWithWhereUniqueWithoutTicket_purchaseInput[]
    createMany?: purchase_detailCreateManyTicket_purchaseInputEnvelope
    set?: purchase_detailWhereUniqueInput | purchase_detailWhereUniqueInput[]
    disconnect?: purchase_detailWhereUniqueInput | purchase_detailWhereUniqueInput[]
    delete?: purchase_detailWhereUniqueInput | purchase_detailWhereUniqueInput[]
    connect?: purchase_detailWhereUniqueInput | purchase_detailWhereUniqueInput[]
    update?: purchase_detailUpdateWithWhereUniqueWithoutTicket_purchaseInput | purchase_detailUpdateWithWhereUniqueWithoutTicket_purchaseInput[]
    updateMany?: purchase_detailUpdateManyWithWhereWithoutTicket_purchaseInput | purchase_detailUpdateManyWithWhereWithoutTicket_purchaseInput[]
    deleteMany?: purchase_detailScalarWhereInput | purchase_detailScalarWhereInput[]
  }

  export type seatCreateNestedOneWithoutPurchase_detailInput = {
    create?: XOR<seatCreateWithoutPurchase_detailInput, seatUncheckedCreateWithoutPurchase_detailInput>
    connectOrCreate?: seatCreateOrConnectWithoutPurchase_detailInput
    connect?: seatWhereUniqueInput
  }

  export type ticket_purchaseCreateNestedOneWithoutPurchase_detailInput = {
    create?: XOR<ticket_purchaseCreateWithoutPurchase_detailInput, ticket_purchaseUncheckedCreateWithoutPurchase_detailInput>
    connectOrCreate?: ticket_purchaseCreateOrConnectWithoutPurchase_detailInput
    connect?: ticket_purchaseWhereUniqueInput
  }

  export type seat_scheduleCreateNestedManyWithoutPurchase_detailInput = {
    create?: XOR<seat_scheduleCreateWithoutPurchase_detailInput, seat_scheduleUncheckedCreateWithoutPurchase_detailInput> | seat_scheduleCreateWithoutPurchase_detailInput[] | seat_scheduleUncheckedCreateWithoutPurchase_detailInput[]
    connectOrCreate?: seat_scheduleCreateOrConnectWithoutPurchase_detailInput | seat_scheduleCreateOrConnectWithoutPurchase_detailInput[]
    createMany?: seat_scheduleCreateManyPurchase_detailInputEnvelope
    connect?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
  }

  export type seat_scheduleUncheckedCreateNestedManyWithoutPurchase_detailInput = {
    create?: XOR<seat_scheduleCreateWithoutPurchase_detailInput, seat_scheduleUncheckedCreateWithoutPurchase_detailInput> | seat_scheduleCreateWithoutPurchase_detailInput[] | seat_scheduleUncheckedCreateWithoutPurchase_detailInput[]
    connectOrCreate?: seat_scheduleCreateOrConnectWithoutPurchase_detailInput | seat_scheduleCreateOrConnectWithoutPurchase_detailInput[]
    createMany?: seat_scheduleCreateManyPurchase_detailInputEnvelope
    connect?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
  }

  export type seatUpdateOneRequiredWithoutPurchase_detailNestedInput = {
    create?: XOR<seatCreateWithoutPurchase_detailInput, seatUncheckedCreateWithoutPurchase_detailInput>
    connectOrCreate?: seatCreateOrConnectWithoutPurchase_detailInput
    upsert?: seatUpsertWithoutPurchase_detailInput
    connect?: seatWhereUniqueInput
    update?: XOR<XOR<seatUpdateToOneWithWhereWithoutPurchase_detailInput, seatUpdateWithoutPurchase_detailInput>, seatUncheckedUpdateWithoutPurchase_detailInput>
  }

  export type ticket_purchaseUpdateOneRequiredWithoutPurchase_detailNestedInput = {
    create?: XOR<ticket_purchaseCreateWithoutPurchase_detailInput, ticket_purchaseUncheckedCreateWithoutPurchase_detailInput>
    connectOrCreate?: ticket_purchaseCreateOrConnectWithoutPurchase_detailInput
    upsert?: ticket_purchaseUpsertWithoutPurchase_detailInput
    connect?: ticket_purchaseWhereUniqueInput
    update?: XOR<XOR<ticket_purchaseUpdateToOneWithWhereWithoutPurchase_detailInput, ticket_purchaseUpdateWithoutPurchase_detailInput>, ticket_purchaseUncheckedUpdateWithoutPurchase_detailInput>
  }

  export type seat_scheduleUpdateManyWithoutPurchase_detailNestedInput = {
    create?: XOR<seat_scheduleCreateWithoutPurchase_detailInput, seat_scheduleUncheckedCreateWithoutPurchase_detailInput> | seat_scheduleCreateWithoutPurchase_detailInput[] | seat_scheduleUncheckedCreateWithoutPurchase_detailInput[]
    connectOrCreate?: seat_scheduleCreateOrConnectWithoutPurchase_detailInput | seat_scheduleCreateOrConnectWithoutPurchase_detailInput[]
    upsert?: seat_scheduleUpsertWithWhereUniqueWithoutPurchase_detailInput | seat_scheduleUpsertWithWhereUniqueWithoutPurchase_detailInput[]
    createMany?: seat_scheduleCreateManyPurchase_detailInputEnvelope
    set?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
    disconnect?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
    delete?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
    connect?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
    update?: seat_scheduleUpdateWithWhereUniqueWithoutPurchase_detailInput | seat_scheduleUpdateWithWhereUniqueWithoutPurchase_detailInput[]
    updateMany?: seat_scheduleUpdateManyWithWhereWithoutPurchase_detailInput | seat_scheduleUpdateManyWithWhereWithoutPurchase_detailInput[]
    deleteMany?: seat_scheduleScalarWhereInput | seat_scheduleScalarWhereInput[]
  }

  export type seat_scheduleUncheckedUpdateManyWithoutPurchase_detailNestedInput = {
    create?: XOR<seat_scheduleCreateWithoutPurchase_detailInput, seat_scheduleUncheckedCreateWithoutPurchase_detailInput> | seat_scheduleCreateWithoutPurchase_detailInput[] | seat_scheduleUncheckedCreateWithoutPurchase_detailInput[]
    connectOrCreate?: seat_scheduleCreateOrConnectWithoutPurchase_detailInput | seat_scheduleCreateOrConnectWithoutPurchase_detailInput[]
    upsert?: seat_scheduleUpsertWithWhereUniqueWithoutPurchase_detailInput | seat_scheduleUpsertWithWhereUniqueWithoutPurchase_detailInput[]
    createMany?: seat_scheduleCreateManyPurchase_detailInputEnvelope
    set?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
    disconnect?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
    delete?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
    connect?: seat_scheduleWhereUniqueInput | seat_scheduleWhereUniqueInput[]
    update?: seat_scheduleUpdateWithWhereUniqueWithoutPurchase_detailInput | seat_scheduleUpdateWithWhereUniqueWithoutPurchase_detailInput[]
    updateMany?: seat_scheduleUpdateManyWithWhereWithoutPurchase_detailInput | seat_scheduleUpdateManyWithWhereWithoutPurchase_detailInput[]
    deleteMany?: seat_scheduleScalarWhereInput | seat_scheduleScalarWhereInput[]
  }

  export type carriageCreateNestedManyWithoutTrainInput = {
    create?: XOR<carriageCreateWithoutTrainInput, carriageUncheckedCreateWithoutTrainInput> | carriageCreateWithoutTrainInput[] | carriageUncheckedCreateWithoutTrainInput[]
    connectOrCreate?: carriageCreateOrConnectWithoutTrainInput | carriageCreateOrConnectWithoutTrainInput[]
    createMany?: carriageCreateManyTrainInputEnvelope
    connect?: carriageWhereUniqueInput | carriageWhereUniqueInput[]
  }

  export type scheduleCreateNestedManyWithoutTrainInput = {
    create?: XOR<scheduleCreateWithoutTrainInput, scheduleUncheckedCreateWithoutTrainInput> | scheduleCreateWithoutTrainInput[] | scheduleUncheckedCreateWithoutTrainInput[]
    connectOrCreate?: scheduleCreateOrConnectWithoutTrainInput | scheduleCreateOrConnectWithoutTrainInput[]
    createMany?: scheduleCreateManyTrainInputEnvelope
    connect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
  }

  export type carriageUncheckedCreateNestedManyWithoutTrainInput = {
    create?: XOR<carriageCreateWithoutTrainInput, carriageUncheckedCreateWithoutTrainInput> | carriageCreateWithoutTrainInput[] | carriageUncheckedCreateWithoutTrainInput[]
    connectOrCreate?: carriageCreateOrConnectWithoutTrainInput | carriageCreateOrConnectWithoutTrainInput[]
    createMany?: carriageCreateManyTrainInputEnvelope
    connect?: carriageWhereUniqueInput | carriageWhereUniqueInput[]
  }

  export type scheduleUncheckedCreateNestedManyWithoutTrainInput = {
    create?: XOR<scheduleCreateWithoutTrainInput, scheduleUncheckedCreateWithoutTrainInput> | scheduleCreateWithoutTrainInput[] | scheduleUncheckedCreateWithoutTrainInput[]
    connectOrCreate?: scheduleCreateOrConnectWithoutTrainInput | scheduleCreateOrConnectWithoutTrainInput[]
    createMany?: scheduleCreateManyTrainInputEnvelope
    connect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
  }

  export type Enumtrain_statusFieldUpdateOperationsInput = {
    set?: $Enums.train_status
  }

  export type carriageUpdateManyWithoutTrainNestedInput = {
    create?: XOR<carriageCreateWithoutTrainInput, carriageUncheckedCreateWithoutTrainInput> | carriageCreateWithoutTrainInput[] | carriageUncheckedCreateWithoutTrainInput[]
    connectOrCreate?: carriageCreateOrConnectWithoutTrainInput | carriageCreateOrConnectWithoutTrainInput[]
    upsert?: carriageUpsertWithWhereUniqueWithoutTrainInput | carriageUpsertWithWhereUniqueWithoutTrainInput[]
    createMany?: carriageCreateManyTrainInputEnvelope
    set?: carriageWhereUniqueInput | carriageWhereUniqueInput[]
    disconnect?: carriageWhereUniqueInput | carriageWhereUniqueInput[]
    delete?: carriageWhereUniqueInput | carriageWhereUniqueInput[]
    connect?: carriageWhereUniqueInput | carriageWhereUniqueInput[]
    update?: carriageUpdateWithWhereUniqueWithoutTrainInput | carriageUpdateWithWhereUniqueWithoutTrainInput[]
    updateMany?: carriageUpdateManyWithWhereWithoutTrainInput | carriageUpdateManyWithWhereWithoutTrainInput[]
    deleteMany?: carriageScalarWhereInput | carriageScalarWhereInput[]
  }

  export type scheduleUpdateManyWithoutTrainNestedInput = {
    create?: XOR<scheduleCreateWithoutTrainInput, scheduleUncheckedCreateWithoutTrainInput> | scheduleCreateWithoutTrainInput[] | scheduleUncheckedCreateWithoutTrainInput[]
    connectOrCreate?: scheduleCreateOrConnectWithoutTrainInput | scheduleCreateOrConnectWithoutTrainInput[]
    upsert?: scheduleUpsertWithWhereUniqueWithoutTrainInput | scheduleUpsertWithWhereUniqueWithoutTrainInput[]
    createMany?: scheduleCreateManyTrainInputEnvelope
    set?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    disconnect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    delete?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    connect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    update?: scheduleUpdateWithWhereUniqueWithoutTrainInput | scheduleUpdateWithWhereUniqueWithoutTrainInput[]
    updateMany?: scheduleUpdateManyWithWhereWithoutTrainInput | scheduleUpdateManyWithWhereWithoutTrainInput[]
    deleteMany?: scheduleScalarWhereInput | scheduleScalarWhereInput[]
  }

  export type carriageUncheckedUpdateManyWithoutTrainNestedInput = {
    create?: XOR<carriageCreateWithoutTrainInput, carriageUncheckedCreateWithoutTrainInput> | carriageCreateWithoutTrainInput[] | carriageUncheckedCreateWithoutTrainInput[]
    connectOrCreate?: carriageCreateOrConnectWithoutTrainInput | carriageCreateOrConnectWithoutTrainInput[]
    upsert?: carriageUpsertWithWhereUniqueWithoutTrainInput | carriageUpsertWithWhereUniqueWithoutTrainInput[]
    createMany?: carriageCreateManyTrainInputEnvelope
    set?: carriageWhereUniqueInput | carriageWhereUniqueInput[]
    disconnect?: carriageWhereUniqueInput | carriageWhereUniqueInput[]
    delete?: carriageWhereUniqueInput | carriageWhereUniqueInput[]
    connect?: carriageWhereUniqueInput | carriageWhereUniqueInput[]
    update?: carriageUpdateWithWhereUniqueWithoutTrainInput | carriageUpdateWithWhereUniqueWithoutTrainInput[]
    updateMany?: carriageUpdateManyWithWhereWithoutTrainInput | carriageUpdateManyWithWhereWithoutTrainInput[]
    deleteMany?: carriageScalarWhereInput | carriageScalarWhereInput[]
  }

  export type scheduleUncheckedUpdateManyWithoutTrainNestedInput = {
    create?: XOR<scheduleCreateWithoutTrainInput, scheduleUncheckedCreateWithoutTrainInput> | scheduleCreateWithoutTrainInput[] | scheduleUncheckedCreateWithoutTrainInput[]
    connectOrCreate?: scheduleCreateOrConnectWithoutTrainInput | scheduleCreateOrConnectWithoutTrainInput[]
    upsert?: scheduleUpsertWithWhereUniqueWithoutTrainInput | scheduleUpsertWithWhereUniqueWithoutTrainInput[]
    createMany?: scheduleCreateManyTrainInputEnvelope
    set?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    disconnect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    delete?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    connect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    update?: scheduleUpdateWithWhereUniqueWithoutTrainInput | scheduleUpdateWithWhereUniqueWithoutTrainInput[]
    updateMany?: scheduleUpdateManyWithWhereWithoutTrainInput | scheduleUpdateManyWithWhereWithoutTrainInput[]
    deleteMany?: scheduleScalarWhereInput | scheduleScalarWhereInput[]
  }

  export type ticket_purchaseCreateNestedManyWithoutUserInput = {
    create?: XOR<ticket_purchaseCreateWithoutUserInput, ticket_purchaseUncheckedCreateWithoutUserInput> | ticket_purchaseCreateWithoutUserInput[] | ticket_purchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ticket_purchaseCreateOrConnectWithoutUserInput | ticket_purchaseCreateOrConnectWithoutUserInput[]
    createMany?: ticket_purchaseCreateManyUserInputEnvelope
    connect?: ticket_purchaseWhereUniqueInput | ticket_purchaseWhereUniqueInput[]
  }

  export type ticket_purchaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ticket_purchaseCreateWithoutUserInput, ticket_purchaseUncheckedCreateWithoutUserInput> | ticket_purchaseCreateWithoutUserInput[] | ticket_purchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ticket_purchaseCreateOrConnectWithoutUserInput | ticket_purchaseCreateOrConnectWithoutUserInput[]
    createMany?: ticket_purchaseCreateManyUserInputEnvelope
    connect?: ticket_purchaseWhereUniqueInput | ticket_purchaseWhereUniqueInput[]
  }

  export type Enumuser_roleFieldUpdateOperationsInput = {
    set?: $Enums.user_role
  }

  export type ticket_purchaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<ticket_purchaseCreateWithoutUserInput, ticket_purchaseUncheckedCreateWithoutUserInput> | ticket_purchaseCreateWithoutUserInput[] | ticket_purchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ticket_purchaseCreateOrConnectWithoutUserInput | ticket_purchaseCreateOrConnectWithoutUserInput[]
    upsert?: ticket_purchaseUpsertWithWhereUniqueWithoutUserInput | ticket_purchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ticket_purchaseCreateManyUserInputEnvelope
    set?: ticket_purchaseWhereUniqueInput | ticket_purchaseWhereUniqueInput[]
    disconnect?: ticket_purchaseWhereUniqueInput | ticket_purchaseWhereUniqueInput[]
    delete?: ticket_purchaseWhereUniqueInput | ticket_purchaseWhereUniqueInput[]
    connect?: ticket_purchaseWhereUniqueInput | ticket_purchaseWhereUniqueInput[]
    update?: ticket_purchaseUpdateWithWhereUniqueWithoutUserInput | ticket_purchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ticket_purchaseUpdateManyWithWhereWithoutUserInput | ticket_purchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ticket_purchaseScalarWhereInput | ticket_purchaseScalarWhereInput[]
  }

  export type ticket_purchaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ticket_purchaseCreateWithoutUserInput, ticket_purchaseUncheckedCreateWithoutUserInput> | ticket_purchaseCreateWithoutUserInput[] | ticket_purchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ticket_purchaseCreateOrConnectWithoutUserInput | ticket_purchaseCreateOrConnectWithoutUserInput[]
    upsert?: ticket_purchaseUpsertWithWhereUniqueWithoutUserInput | ticket_purchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ticket_purchaseCreateManyUserInputEnvelope
    set?: ticket_purchaseWhereUniqueInput | ticket_purchaseWhereUniqueInput[]
    disconnect?: ticket_purchaseWhereUniqueInput | ticket_purchaseWhereUniqueInput[]
    delete?: ticket_purchaseWhereUniqueInput | ticket_purchaseWhereUniqueInput[]
    connect?: ticket_purchaseWhereUniqueInput | ticket_purchaseWhereUniqueInput[]
    update?: ticket_purchaseUpdateWithWhereUniqueWithoutUserInput | ticket_purchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ticket_purchaseUpdateManyWithWhereWithoutUserInput | ticket_purchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ticket_purchaseScalarWhereInput | ticket_purchaseScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumcarriage_categoryFilter<$PrismaModel = never> = {
    equals?: $Enums.carriage_category | Enumcarriage_categoryFieldRefInput<$PrismaModel>
    in?: $Enums.carriage_category[]
    notIn?: $Enums.carriage_category[]
    not?: NestedEnumcarriage_categoryFilter<$PrismaModel> | $Enums.carriage_category
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumcarriage_categoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.carriage_category | Enumcarriage_categoryFieldRefInput<$PrismaModel>
    in?: $Enums.carriage_category[]
    notIn?: $Enums.carriage_category[]
    not?: NestedEnumcarriage_categoryWithAggregatesFilter<$PrismaModel> | $Enums.carriage_category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcarriage_categoryFilter<$PrismaModel>
    _max?: NestedEnumcarriage_categoryFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumstatusFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[]
    notIn?: $Enums.status[]
    not?: NestedEnumstatusFilter<$PrismaModel> | $Enums.status
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumstatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[]
    notIn?: $Enums.status[]
    not?: NestedEnumstatusWithAggregatesFilter<$PrismaModel> | $Enums.status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusFilter<$PrismaModel>
    _max?: NestedEnumstatusFilter<$PrismaModel>
  }

  export type NestedEnumseatschedule_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.seatschedule_status | Enumseatschedule_statusFieldRefInput<$PrismaModel>
    in?: $Enums.seatschedule_status[]
    notIn?: $Enums.seatschedule_status[]
    not?: NestedEnumseatschedule_statusFilter<$PrismaModel> | $Enums.seatschedule_status
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumseatschedule_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.seatschedule_status | Enumseatschedule_statusFieldRefInput<$PrismaModel>
    in?: $Enums.seatschedule_status[]
    notIn?: $Enums.seatschedule_status[]
    not?: NestedEnumseatschedule_statusWithAggregatesFilter<$PrismaModel> | $Enums.seatschedule_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumseatschedule_statusFilter<$PrismaModel>
    _max?: NestedEnumseatschedule_statusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumtrain_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.train_status | Enumtrain_statusFieldRefInput<$PrismaModel>
    in?: $Enums.train_status[]
    notIn?: $Enums.train_status[]
    not?: NestedEnumtrain_statusFilter<$PrismaModel> | $Enums.train_status
  }

  export type NestedEnumtrain_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.train_status | Enumtrain_statusFieldRefInput<$PrismaModel>
    in?: $Enums.train_status[]
    notIn?: $Enums.train_status[]
    not?: NestedEnumtrain_statusWithAggregatesFilter<$PrismaModel> | $Enums.train_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtrain_statusFilter<$PrismaModel>
    _max?: NestedEnumtrain_statusFilter<$PrismaModel>
  }

  export type NestedEnumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
  }

  export type NestedEnumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type trainCreateWithoutCarriageInput = {
    train_name: string
    description: string
    train_picture?: string
    train_status?: $Enums.train_status
    schedule?: scheduleCreateNestedManyWithoutTrainInput
  }

  export type trainUncheckedCreateWithoutCarriageInput = {
    id_train?: number
    train_name: string
    description: string
    train_picture?: string
    train_status?: $Enums.train_status
    schedule?: scheduleUncheckedCreateNestedManyWithoutTrainInput
  }

  export type trainCreateOrConnectWithoutCarriageInput = {
    where: trainWhereUniqueInput
    create: XOR<trainCreateWithoutCarriageInput, trainUncheckedCreateWithoutCarriageInput>
  }

  export type seatCreateWithoutCarriageInput = {
    seat_num: string
    purchase_detail?: purchase_detailCreateNestedManyWithoutSeatInput
    seat_schedule?: seat_scheduleCreateNestedManyWithoutSeatInput
  }

  export type seatUncheckedCreateWithoutCarriageInput = {
    id_seat?: number
    seat_num: string
    purchase_detail?: purchase_detailUncheckedCreateNestedManyWithoutSeatInput
    seat_schedule?: seat_scheduleUncheckedCreateNestedManyWithoutSeatInput
  }

  export type seatCreateOrConnectWithoutCarriageInput = {
    where: seatWhereUniqueInput
    create: XOR<seatCreateWithoutCarriageInput, seatUncheckedCreateWithoutCarriageInput>
  }

  export type seatCreateManyCarriageInputEnvelope = {
    data: seatCreateManyCarriageInput | seatCreateManyCarriageInput[]
    skipDuplicates?: boolean
  }

  export type trainUpsertWithoutCarriageInput = {
    update: XOR<trainUpdateWithoutCarriageInput, trainUncheckedUpdateWithoutCarriageInput>
    create: XOR<trainCreateWithoutCarriageInput, trainUncheckedCreateWithoutCarriageInput>
    where?: trainWhereInput
  }

  export type trainUpdateToOneWithWhereWithoutCarriageInput = {
    where?: trainWhereInput
    data: XOR<trainUpdateWithoutCarriageInput, trainUncheckedUpdateWithoutCarriageInput>
  }

  export type trainUpdateWithoutCarriageInput = {
    train_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    train_picture?: StringFieldUpdateOperationsInput | string
    train_status?: Enumtrain_statusFieldUpdateOperationsInput | $Enums.train_status
    schedule?: scheduleUpdateManyWithoutTrainNestedInput
  }

  export type trainUncheckedUpdateWithoutCarriageInput = {
    id_train?: IntFieldUpdateOperationsInput | number
    train_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    train_picture?: StringFieldUpdateOperationsInput | string
    train_status?: Enumtrain_statusFieldUpdateOperationsInput | $Enums.train_status
    schedule?: scheduleUncheckedUpdateManyWithoutTrainNestedInput
  }

  export type seatUpsertWithWhereUniqueWithoutCarriageInput = {
    where: seatWhereUniqueInput
    update: XOR<seatUpdateWithoutCarriageInput, seatUncheckedUpdateWithoutCarriageInput>
    create: XOR<seatCreateWithoutCarriageInput, seatUncheckedCreateWithoutCarriageInput>
  }

  export type seatUpdateWithWhereUniqueWithoutCarriageInput = {
    where: seatWhereUniqueInput
    data: XOR<seatUpdateWithoutCarriageInput, seatUncheckedUpdateWithoutCarriageInput>
  }

  export type seatUpdateManyWithWhereWithoutCarriageInput = {
    where: seatScalarWhereInput
    data: XOR<seatUpdateManyMutationInput, seatUncheckedUpdateManyWithoutCarriageInput>
  }

  export type seatScalarWhereInput = {
    AND?: seatScalarWhereInput | seatScalarWhereInput[]
    OR?: seatScalarWhereInput[]
    NOT?: seatScalarWhereInput | seatScalarWhereInput[]
    id_seat?: IntFilter<"seat"> | number
    seat_num?: StringFilter<"seat"> | string
    id_carriage?: IntFilter<"seat"> | number
  }

  export type trainCreateWithoutScheduleInput = {
    train_name: string
    description: string
    train_picture?: string
    train_status?: $Enums.train_status
    carriage?: carriageCreateNestedManyWithoutTrainInput
  }

  export type trainUncheckedCreateWithoutScheduleInput = {
    id_train?: number
    train_name: string
    description: string
    train_picture?: string
    train_status?: $Enums.train_status
    carriage?: carriageUncheckedCreateNestedManyWithoutTrainInput
  }

  export type trainCreateOrConnectWithoutScheduleInput = {
    where: trainWhereUniqueInput
    create: XOR<trainCreateWithoutScheduleInput, trainUncheckedCreateWithoutScheduleInput>
  }

  export type seat_scheduleCreateWithoutScheduleInput = {
    seatschedule_status?: $Enums.seatschedule_status
    purchase_detail?: purchase_detailCreateNestedOneWithoutSeat_scheduleInput
    seat: seatCreateNestedOneWithoutSeat_scheduleInput
  }

  export type seat_scheduleUncheckedCreateWithoutScheduleInput = {
    id_seat_schedule?: number
    id_seat: number
    seatschedule_status?: $Enums.seatschedule_status
    purchaseDetailId_purchasedetail?: number | null
  }

  export type seat_scheduleCreateOrConnectWithoutScheduleInput = {
    where: seat_scheduleWhereUniqueInput
    create: XOR<seat_scheduleCreateWithoutScheduleInput, seat_scheduleUncheckedCreateWithoutScheduleInput>
  }

  export type seat_scheduleCreateManyScheduleInputEnvelope = {
    data: seat_scheduleCreateManyScheduleInput | seat_scheduleCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type ticket_purchaseCreateWithoutScheduleInput = {
    purchase_date?: Date | string
    buyer_name: string
    buyer_email: string
    buyer_phone: string
    total_price: number
    purchase_detail?: purchase_detailCreateNestedManyWithoutTicket_purchaseInput
    user?: userCreateNestedOneWithoutTicket_purchaseInput
  }

  export type ticket_purchaseUncheckedCreateWithoutScheduleInput = {
    id_ticketpurchase?: number
    purchase_date?: Date | string
    buyer_name: string
    buyer_email: string
    buyer_phone: string
    total_price: number
    id_user?: number | null
    purchase_detail?: purchase_detailUncheckedCreateNestedManyWithoutTicket_purchaseInput
  }

  export type ticket_purchaseCreateOrConnectWithoutScheduleInput = {
    where: ticket_purchaseWhereUniqueInput
    create: XOR<ticket_purchaseCreateWithoutScheduleInput, ticket_purchaseUncheckedCreateWithoutScheduleInput>
  }

  export type ticket_purchaseCreateManyScheduleInputEnvelope = {
    data: ticket_purchaseCreateManyScheduleInput | ticket_purchaseCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type trainUpsertWithoutScheduleInput = {
    update: XOR<trainUpdateWithoutScheduleInput, trainUncheckedUpdateWithoutScheduleInput>
    create: XOR<trainCreateWithoutScheduleInput, trainUncheckedCreateWithoutScheduleInput>
    where?: trainWhereInput
  }

  export type trainUpdateToOneWithWhereWithoutScheduleInput = {
    where?: trainWhereInput
    data: XOR<trainUpdateWithoutScheduleInput, trainUncheckedUpdateWithoutScheduleInput>
  }

  export type trainUpdateWithoutScheduleInput = {
    train_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    train_picture?: StringFieldUpdateOperationsInput | string
    train_status?: Enumtrain_statusFieldUpdateOperationsInput | $Enums.train_status
    carriage?: carriageUpdateManyWithoutTrainNestedInput
  }

  export type trainUncheckedUpdateWithoutScheduleInput = {
    id_train?: IntFieldUpdateOperationsInput | number
    train_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    train_picture?: StringFieldUpdateOperationsInput | string
    train_status?: Enumtrain_statusFieldUpdateOperationsInput | $Enums.train_status
    carriage?: carriageUncheckedUpdateManyWithoutTrainNestedInput
  }

  export type seat_scheduleUpsertWithWhereUniqueWithoutScheduleInput = {
    where: seat_scheduleWhereUniqueInput
    update: XOR<seat_scheduleUpdateWithoutScheduleInput, seat_scheduleUncheckedUpdateWithoutScheduleInput>
    create: XOR<seat_scheduleCreateWithoutScheduleInput, seat_scheduleUncheckedCreateWithoutScheduleInput>
  }

  export type seat_scheduleUpdateWithWhereUniqueWithoutScheduleInput = {
    where: seat_scheduleWhereUniqueInput
    data: XOR<seat_scheduleUpdateWithoutScheduleInput, seat_scheduleUncheckedUpdateWithoutScheduleInput>
  }

  export type seat_scheduleUpdateManyWithWhereWithoutScheduleInput = {
    where: seat_scheduleScalarWhereInput
    data: XOR<seat_scheduleUpdateManyMutationInput, seat_scheduleUncheckedUpdateManyWithoutScheduleInput>
  }

  export type seat_scheduleScalarWhereInput = {
    AND?: seat_scheduleScalarWhereInput | seat_scheduleScalarWhereInput[]
    OR?: seat_scheduleScalarWhereInput[]
    NOT?: seat_scheduleScalarWhereInput | seat_scheduleScalarWhereInput[]
    id_seat_schedule?: IntFilter<"seat_schedule"> | number
    id_seat?: IntFilter<"seat_schedule"> | number
    id_schedule?: IntFilter<"seat_schedule"> | number
    seatschedule_status?: Enumseatschedule_statusFilter<"seat_schedule"> | $Enums.seatschedule_status
    purchaseDetailId_purchasedetail?: IntNullableFilter<"seat_schedule"> | number | null
  }

  export type ticket_purchaseUpsertWithWhereUniqueWithoutScheduleInput = {
    where: ticket_purchaseWhereUniqueInput
    update: XOR<ticket_purchaseUpdateWithoutScheduleInput, ticket_purchaseUncheckedUpdateWithoutScheduleInput>
    create: XOR<ticket_purchaseCreateWithoutScheduleInput, ticket_purchaseUncheckedCreateWithoutScheduleInput>
  }

  export type ticket_purchaseUpdateWithWhereUniqueWithoutScheduleInput = {
    where: ticket_purchaseWhereUniqueInput
    data: XOR<ticket_purchaseUpdateWithoutScheduleInput, ticket_purchaseUncheckedUpdateWithoutScheduleInput>
  }

  export type ticket_purchaseUpdateManyWithWhereWithoutScheduleInput = {
    where: ticket_purchaseScalarWhereInput
    data: XOR<ticket_purchaseUpdateManyMutationInput, ticket_purchaseUncheckedUpdateManyWithoutScheduleInput>
  }

  export type ticket_purchaseScalarWhereInput = {
    AND?: ticket_purchaseScalarWhereInput | ticket_purchaseScalarWhereInput[]
    OR?: ticket_purchaseScalarWhereInput[]
    NOT?: ticket_purchaseScalarWhereInput | ticket_purchaseScalarWhereInput[]
    id_ticketpurchase?: IntFilter<"ticket_purchase"> | number
    purchase_date?: DateTimeFilter<"ticket_purchase"> | Date | string
    buyer_name?: StringFilter<"ticket_purchase"> | string
    buyer_email?: StringFilter<"ticket_purchase"> | string
    buyer_phone?: StringFilter<"ticket_purchase"> | string
    total_price?: FloatFilter<"ticket_purchase"> | number
    id_schedule?: IntFilter<"ticket_purchase"> | number
    id_user?: IntNullableFilter<"ticket_purchase"> | number | null
  }

  export type purchase_detailCreateWithoutSeatInput = {
    buyer_name: string
    buyer_email: string
    buyer_phone: string
    total_price: number
    ticket_purchase: ticket_purchaseCreateNestedOneWithoutPurchase_detailInput
    seat_schedule?: seat_scheduleCreateNestedManyWithoutPurchase_detailInput
  }

  export type purchase_detailUncheckedCreateWithoutSeatInput = {
    id_purchasedetail?: number
    buyer_name: string
    buyer_email: string
    buyer_phone: string
    total_price: number
    id_ticket_purchase: number
    seat_schedule?: seat_scheduleUncheckedCreateNestedManyWithoutPurchase_detailInput
  }

  export type purchase_detailCreateOrConnectWithoutSeatInput = {
    where: purchase_detailWhereUniqueInput
    create: XOR<purchase_detailCreateWithoutSeatInput, purchase_detailUncheckedCreateWithoutSeatInput>
  }

  export type purchase_detailCreateManySeatInputEnvelope = {
    data: purchase_detailCreateManySeatInput | purchase_detailCreateManySeatInput[]
    skipDuplicates?: boolean
  }

  export type carriageCreateWithoutSeatInput = {
    carriage_name: string
    quota: number
    carriage_category: $Enums.carriage_category
    train: trainCreateNestedOneWithoutCarriageInput
  }

  export type carriageUncheckedCreateWithoutSeatInput = {
    id_carriage?: number
    carriage_name: string
    quota: number
    carriage_category: $Enums.carriage_category
    id_train: number
  }

  export type carriageCreateOrConnectWithoutSeatInput = {
    where: carriageWhereUniqueInput
    create: XOR<carriageCreateWithoutSeatInput, carriageUncheckedCreateWithoutSeatInput>
  }

  export type seat_scheduleCreateWithoutSeatInput = {
    seatschedule_status?: $Enums.seatschedule_status
    purchase_detail?: purchase_detailCreateNestedOneWithoutSeat_scheduleInput
    schedule: scheduleCreateNestedOneWithoutSeat_scheduleInput
  }

  export type seat_scheduleUncheckedCreateWithoutSeatInput = {
    id_seat_schedule?: number
    id_schedule: number
    seatschedule_status?: $Enums.seatschedule_status
    purchaseDetailId_purchasedetail?: number | null
  }

  export type seat_scheduleCreateOrConnectWithoutSeatInput = {
    where: seat_scheduleWhereUniqueInput
    create: XOR<seat_scheduleCreateWithoutSeatInput, seat_scheduleUncheckedCreateWithoutSeatInput>
  }

  export type seat_scheduleCreateManySeatInputEnvelope = {
    data: seat_scheduleCreateManySeatInput | seat_scheduleCreateManySeatInput[]
    skipDuplicates?: boolean
  }

  export type purchase_detailUpsertWithWhereUniqueWithoutSeatInput = {
    where: purchase_detailWhereUniqueInput
    update: XOR<purchase_detailUpdateWithoutSeatInput, purchase_detailUncheckedUpdateWithoutSeatInput>
    create: XOR<purchase_detailCreateWithoutSeatInput, purchase_detailUncheckedCreateWithoutSeatInput>
  }

  export type purchase_detailUpdateWithWhereUniqueWithoutSeatInput = {
    where: purchase_detailWhereUniqueInput
    data: XOR<purchase_detailUpdateWithoutSeatInput, purchase_detailUncheckedUpdateWithoutSeatInput>
  }

  export type purchase_detailUpdateManyWithWhereWithoutSeatInput = {
    where: purchase_detailScalarWhereInput
    data: XOR<purchase_detailUpdateManyMutationInput, purchase_detailUncheckedUpdateManyWithoutSeatInput>
  }

  export type purchase_detailScalarWhereInput = {
    AND?: purchase_detailScalarWhereInput | purchase_detailScalarWhereInput[]
    OR?: purchase_detailScalarWhereInput[]
    NOT?: purchase_detailScalarWhereInput | purchase_detailScalarWhereInput[]
    id_purchasedetail?: IntFilter<"purchase_detail"> | number
    buyer_name?: StringFilter<"purchase_detail"> | string
    buyer_email?: StringFilter<"purchase_detail"> | string
    buyer_phone?: StringFilter<"purchase_detail"> | string
    total_price?: FloatFilter<"purchase_detail"> | number
    id_seat?: IntFilter<"purchase_detail"> | number
    id_ticket_purchase?: IntFilter<"purchase_detail"> | number
  }

  export type carriageUpsertWithoutSeatInput = {
    update: XOR<carriageUpdateWithoutSeatInput, carriageUncheckedUpdateWithoutSeatInput>
    create: XOR<carriageCreateWithoutSeatInput, carriageUncheckedCreateWithoutSeatInput>
    where?: carriageWhereInput
  }

  export type carriageUpdateToOneWithWhereWithoutSeatInput = {
    where?: carriageWhereInput
    data: XOR<carriageUpdateWithoutSeatInput, carriageUncheckedUpdateWithoutSeatInput>
  }

  export type carriageUpdateWithoutSeatInput = {
    carriage_name?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
    carriage_category?: Enumcarriage_categoryFieldUpdateOperationsInput | $Enums.carriage_category
    train?: trainUpdateOneRequiredWithoutCarriageNestedInput
  }

  export type carriageUncheckedUpdateWithoutSeatInput = {
    id_carriage?: IntFieldUpdateOperationsInput | number
    carriage_name?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
    carriage_category?: Enumcarriage_categoryFieldUpdateOperationsInput | $Enums.carriage_category
    id_train?: IntFieldUpdateOperationsInput | number
  }

  export type seat_scheduleUpsertWithWhereUniqueWithoutSeatInput = {
    where: seat_scheduleWhereUniqueInput
    update: XOR<seat_scheduleUpdateWithoutSeatInput, seat_scheduleUncheckedUpdateWithoutSeatInput>
    create: XOR<seat_scheduleCreateWithoutSeatInput, seat_scheduleUncheckedCreateWithoutSeatInput>
  }

  export type seat_scheduleUpdateWithWhereUniqueWithoutSeatInput = {
    where: seat_scheduleWhereUniqueInput
    data: XOR<seat_scheduleUpdateWithoutSeatInput, seat_scheduleUncheckedUpdateWithoutSeatInput>
  }

  export type seat_scheduleUpdateManyWithWhereWithoutSeatInput = {
    where: seat_scheduleScalarWhereInput
    data: XOR<seat_scheduleUpdateManyMutationInput, seat_scheduleUncheckedUpdateManyWithoutSeatInput>
  }

  export type purchase_detailCreateWithoutSeat_scheduleInput = {
    buyer_name: string
    buyer_email: string
    buyer_phone: string
    total_price: number
    seat: seatCreateNestedOneWithoutPurchase_detailInput
    ticket_purchase: ticket_purchaseCreateNestedOneWithoutPurchase_detailInput
  }

  export type purchase_detailUncheckedCreateWithoutSeat_scheduleInput = {
    id_purchasedetail?: number
    buyer_name: string
    buyer_email: string
    buyer_phone: string
    total_price: number
    id_seat: number
    id_ticket_purchase: number
  }

  export type purchase_detailCreateOrConnectWithoutSeat_scheduleInput = {
    where: purchase_detailWhereUniqueInput
    create: XOR<purchase_detailCreateWithoutSeat_scheduleInput, purchase_detailUncheckedCreateWithoutSeat_scheduleInput>
  }

  export type scheduleCreateWithoutSeat_scheduleInput = {
    schedule_name: string
    departure: string
    destination: string
    departure_date: Date | string
    arrival_date: Date | string
    price: number
    quota_total: number
    status?: $Enums.status
    train: trainCreateNestedOneWithoutScheduleInput
    ticket_purchase?: ticket_purchaseCreateNestedManyWithoutScheduleInput
  }

  export type scheduleUncheckedCreateWithoutSeat_scheduleInput = {
    id_schedule?: number
    schedule_name: string
    departure: string
    destination: string
    departure_date: Date | string
    arrival_date: Date | string
    price: number
    quota_total: number
    status?: $Enums.status
    id_train: number
    ticket_purchase?: ticket_purchaseUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type scheduleCreateOrConnectWithoutSeat_scheduleInput = {
    where: scheduleWhereUniqueInput
    create: XOR<scheduleCreateWithoutSeat_scheduleInput, scheduleUncheckedCreateWithoutSeat_scheduleInput>
  }

  export type seatCreateWithoutSeat_scheduleInput = {
    seat_num: string
    purchase_detail?: purchase_detailCreateNestedManyWithoutSeatInput
    carriage: carriageCreateNestedOneWithoutSeatInput
  }

  export type seatUncheckedCreateWithoutSeat_scheduleInput = {
    id_seat?: number
    seat_num: string
    id_carriage: number
    purchase_detail?: purchase_detailUncheckedCreateNestedManyWithoutSeatInput
  }

  export type seatCreateOrConnectWithoutSeat_scheduleInput = {
    where: seatWhereUniqueInput
    create: XOR<seatCreateWithoutSeat_scheduleInput, seatUncheckedCreateWithoutSeat_scheduleInput>
  }

  export type purchase_detailUpsertWithoutSeat_scheduleInput = {
    update: XOR<purchase_detailUpdateWithoutSeat_scheduleInput, purchase_detailUncheckedUpdateWithoutSeat_scheduleInput>
    create: XOR<purchase_detailCreateWithoutSeat_scheduleInput, purchase_detailUncheckedCreateWithoutSeat_scheduleInput>
    where?: purchase_detailWhereInput
  }

  export type purchase_detailUpdateToOneWithWhereWithoutSeat_scheduleInput = {
    where?: purchase_detailWhereInput
    data: XOR<purchase_detailUpdateWithoutSeat_scheduleInput, purchase_detailUncheckedUpdateWithoutSeat_scheduleInput>
  }

  export type purchase_detailUpdateWithoutSeat_scheduleInput = {
    buyer_name?: StringFieldUpdateOperationsInput | string
    buyer_email?: StringFieldUpdateOperationsInput | string
    buyer_phone?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
    seat?: seatUpdateOneRequiredWithoutPurchase_detailNestedInput
    ticket_purchase?: ticket_purchaseUpdateOneRequiredWithoutPurchase_detailNestedInput
  }

  export type purchase_detailUncheckedUpdateWithoutSeat_scheduleInput = {
    id_purchasedetail?: IntFieldUpdateOperationsInput | number
    buyer_name?: StringFieldUpdateOperationsInput | string
    buyer_email?: StringFieldUpdateOperationsInput | string
    buyer_phone?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
    id_seat?: IntFieldUpdateOperationsInput | number
    id_ticket_purchase?: IntFieldUpdateOperationsInput | number
  }

  export type scheduleUpsertWithoutSeat_scheduleInput = {
    update: XOR<scheduleUpdateWithoutSeat_scheduleInput, scheduleUncheckedUpdateWithoutSeat_scheduleInput>
    create: XOR<scheduleCreateWithoutSeat_scheduleInput, scheduleUncheckedCreateWithoutSeat_scheduleInput>
    where?: scheduleWhereInput
  }

  export type scheduleUpdateToOneWithWhereWithoutSeat_scheduleInput = {
    where?: scheduleWhereInput
    data: XOR<scheduleUpdateWithoutSeat_scheduleInput, scheduleUncheckedUpdateWithoutSeat_scheduleInput>
  }

  export type scheduleUpdateWithoutSeat_scheduleInput = {
    schedule_name?: StringFieldUpdateOperationsInput | string
    departure?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departure_date?: DateTimeFieldUpdateOperationsInput | Date | string
    arrival_date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    quota_total?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    train?: trainUpdateOneRequiredWithoutScheduleNestedInput
    ticket_purchase?: ticket_purchaseUpdateManyWithoutScheduleNestedInput
  }

  export type scheduleUncheckedUpdateWithoutSeat_scheduleInput = {
    id_schedule?: IntFieldUpdateOperationsInput | number
    schedule_name?: StringFieldUpdateOperationsInput | string
    departure?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departure_date?: DateTimeFieldUpdateOperationsInput | Date | string
    arrival_date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    quota_total?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    id_train?: IntFieldUpdateOperationsInput | number
    ticket_purchase?: ticket_purchaseUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type seatUpsertWithoutSeat_scheduleInput = {
    update: XOR<seatUpdateWithoutSeat_scheduleInput, seatUncheckedUpdateWithoutSeat_scheduleInput>
    create: XOR<seatCreateWithoutSeat_scheduleInput, seatUncheckedCreateWithoutSeat_scheduleInput>
    where?: seatWhereInput
  }

  export type seatUpdateToOneWithWhereWithoutSeat_scheduleInput = {
    where?: seatWhereInput
    data: XOR<seatUpdateWithoutSeat_scheduleInput, seatUncheckedUpdateWithoutSeat_scheduleInput>
  }

  export type seatUpdateWithoutSeat_scheduleInput = {
    seat_num?: StringFieldUpdateOperationsInput | string
    purchase_detail?: purchase_detailUpdateManyWithoutSeatNestedInput
    carriage?: carriageUpdateOneRequiredWithoutSeatNestedInput
  }

  export type seatUncheckedUpdateWithoutSeat_scheduleInput = {
    id_seat?: IntFieldUpdateOperationsInput | number
    seat_num?: StringFieldUpdateOperationsInput | string
    id_carriage?: IntFieldUpdateOperationsInput | number
    purchase_detail?: purchase_detailUncheckedUpdateManyWithoutSeatNestedInput
  }

  export type purchase_detailCreateWithoutTicket_purchaseInput = {
    buyer_name: string
    buyer_email: string
    buyer_phone: string
    total_price: number
    seat: seatCreateNestedOneWithoutPurchase_detailInput
    seat_schedule?: seat_scheduleCreateNestedManyWithoutPurchase_detailInput
  }

  export type purchase_detailUncheckedCreateWithoutTicket_purchaseInput = {
    id_purchasedetail?: number
    buyer_name: string
    buyer_email: string
    buyer_phone: string
    total_price: number
    id_seat: number
    seat_schedule?: seat_scheduleUncheckedCreateNestedManyWithoutPurchase_detailInput
  }

  export type purchase_detailCreateOrConnectWithoutTicket_purchaseInput = {
    where: purchase_detailWhereUniqueInput
    create: XOR<purchase_detailCreateWithoutTicket_purchaseInput, purchase_detailUncheckedCreateWithoutTicket_purchaseInput>
  }

  export type purchase_detailCreateManyTicket_purchaseInputEnvelope = {
    data: purchase_detailCreateManyTicket_purchaseInput | purchase_detailCreateManyTicket_purchaseInput[]
    skipDuplicates?: boolean
  }

  export type scheduleCreateWithoutTicket_purchaseInput = {
    schedule_name: string
    departure: string
    destination: string
    departure_date: Date | string
    arrival_date: Date | string
    price: number
    quota_total: number
    status?: $Enums.status
    train: trainCreateNestedOneWithoutScheduleInput
    seat_schedule?: seat_scheduleCreateNestedManyWithoutScheduleInput
  }

  export type scheduleUncheckedCreateWithoutTicket_purchaseInput = {
    id_schedule?: number
    schedule_name: string
    departure: string
    destination: string
    departure_date: Date | string
    arrival_date: Date | string
    price: number
    quota_total: number
    status?: $Enums.status
    id_train: number
    seat_schedule?: seat_scheduleUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type scheduleCreateOrConnectWithoutTicket_purchaseInput = {
    where: scheduleWhereUniqueInput
    create: XOR<scheduleCreateWithoutTicket_purchaseInput, scheduleUncheckedCreateWithoutTicket_purchaseInput>
  }

  export type userCreateWithoutTicket_purchaseInput = {
    username: string
    email: string
    password: string
    role: $Enums.user_role
    profile_picture?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string
    nik: string
    phone?: string
  }

  export type userUncheckedCreateWithoutTicket_purchaseInput = {
    id_user?: number
    username: string
    email: string
    password: string
    role: $Enums.user_role
    profile_picture?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string
    nik: string
    phone?: string
  }

  export type userCreateOrConnectWithoutTicket_purchaseInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutTicket_purchaseInput, userUncheckedCreateWithoutTicket_purchaseInput>
  }

  export type purchase_detailUpsertWithWhereUniqueWithoutTicket_purchaseInput = {
    where: purchase_detailWhereUniqueInput
    update: XOR<purchase_detailUpdateWithoutTicket_purchaseInput, purchase_detailUncheckedUpdateWithoutTicket_purchaseInput>
    create: XOR<purchase_detailCreateWithoutTicket_purchaseInput, purchase_detailUncheckedCreateWithoutTicket_purchaseInput>
  }

  export type purchase_detailUpdateWithWhereUniqueWithoutTicket_purchaseInput = {
    where: purchase_detailWhereUniqueInput
    data: XOR<purchase_detailUpdateWithoutTicket_purchaseInput, purchase_detailUncheckedUpdateWithoutTicket_purchaseInput>
  }

  export type purchase_detailUpdateManyWithWhereWithoutTicket_purchaseInput = {
    where: purchase_detailScalarWhereInput
    data: XOR<purchase_detailUpdateManyMutationInput, purchase_detailUncheckedUpdateManyWithoutTicket_purchaseInput>
  }

  export type scheduleUpsertWithoutTicket_purchaseInput = {
    update: XOR<scheduleUpdateWithoutTicket_purchaseInput, scheduleUncheckedUpdateWithoutTicket_purchaseInput>
    create: XOR<scheduleCreateWithoutTicket_purchaseInput, scheduleUncheckedCreateWithoutTicket_purchaseInput>
    where?: scheduleWhereInput
  }

  export type scheduleUpdateToOneWithWhereWithoutTicket_purchaseInput = {
    where?: scheduleWhereInput
    data: XOR<scheduleUpdateWithoutTicket_purchaseInput, scheduleUncheckedUpdateWithoutTicket_purchaseInput>
  }

  export type scheduleUpdateWithoutTicket_purchaseInput = {
    schedule_name?: StringFieldUpdateOperationsInput | string
    departure?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departure_date?: DateTimeFieldUpdateOperationsInput | Date | string
    arrival_date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    quota_total?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    train?: trainUpdateOneRequiredWithoutScheduleNestedInput
    seat_schedule?: seat_scheduleUpdateManyWithoutScheduleNestedInput
  }

  export type scheduleUncheckedUpdateWithoutTicket_purchaseInput = {
    id_schedule?: IntFieldUpdateOperationsInput | number
    schedule_name?: StringFieldUpdateOperationsInput | string
    departure?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departure_date?: DateTimeFieldUpdateOperationsInput | Date | string
    arrival_date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    quota_total?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    id_train?: IntFieldUpdateOperationsInput | number
    seat_schedule?: seat_scheduleUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type userUpsertWithoutTicket_purchaseInput = {
    update: XOR<userUpdateWithoutTicket_purchaseInput, userUncheckedUpdateWithoutTicket_purchaseInput>
    create: XOR<userCreateWithoutTicket_purchaseInput, userUncheckedCreateWithoutTicket_purchaseInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutTicket_purchaseInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutTicket_purchaseInput, userUncheckedUpdateWithoutTicket_purchaseInput>
  }

  export type userUpdateWithoutTicket_purchaseInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    profile_picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateWithoutTicket_purchaseInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    profile_picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type seatCreateWithoutPurchase_detailInput = {
    seat_num: string
    carriage: carriageCreateNestedOneWithoutSeatInput
    seat_schedule?: seat_scheduleCreateNestedManyWithoutSeatInput
  }

  export type seatUncheckedCreateWithoutPurchase_detailInput = {
    id_seat?: number
    seat_num: string
    id_carriage: number
    seat_schedule?: seat_scheduleUncheckedCreateNestedManyWithoutSeatInput
  }

  export type seatCreateOrConnectWithoutPurchase_detailInput = {
    where: seatWhereUniqueInput
    create: XOR<seatCreateWithoutPurchase_detailInput, seatUncheckedCreateWithoutPurchase_detailInput>
  }

  export type ticket_purchaseCreateWithoutPurchase_detailInput = {
    purchase_date?: Date | string
    buyer_name: string
    buyer_email: string
    buyer_phone: string
    total_price: number
    schedule: scheduleCreateNestedOneWithoutTicket_purchaseInput
    user?: userCreateNestedOneWithoutTicket_purchaseInput
  }

  export type ticket_purchaseUncheckedCreateWithoutPurchase_detailInput = {
    id_ticketpurchase?: number
    purchase_date?: Date | string
    buyer_name: string
    buyer_email: string
    buyer_phone: string
    total_price: number
    id_schedule: number
    id_user?: number | null
  }

  export type ticket_purchaseCreateOrConnectWithoutPurchase_detailInput = {
    where: ticket_purchaseWhereUniqueInput
    create: XOR<ticket_purchaseCreateWithoutPurchase_detailInput, ticket_purchaseUncheckedCreateWithoutPurchase_detailInput>
  }

  export type seat_scheduleCreateWithoutPurchase_detailInput = {
    seatschedule_status?: $Enums.seatschedule_status
    schedule: scheduleCreateNestedOneWithoutSeat_scheduleInput
    seat: seatCreateNestedOneWithoutSeat_scheduleInput
  }

  export type seat_scheduleUncheckedCreateWithoutPurchase_detailInput = {
    id_seat_schedule?: number
    id_seat: number
    id_schedule: number
    seatschedule_status?: $Enums.seatschedule_status
  }

  export type seat_scheduleCreateOrConnectWithoutPurchase_detailInput = {
    where: seat_scheduleWhereUniqueInput
    create: XOR<seat_scheduleCreateWithoutPurchase_detailInput, seat_scheduleUncheckedCreateWithoutPurchase_detailInput>
  }

  export type seat_scheduleCreateManyPurchase_detailInputEnvelope = {
    data: seat_scheduleCreateManyPurchase_detailInput | seat_scheduleCreateManyPurchase_detailInput[]
    skipDuplicates?: boolean
  }

  export type seatUpsertWithoutPurchase_detailInput = {
    update: XOR<seatUpdateWithoutPurchase_detailInput, seatUncheckedUpdateWithoutPurchase_detailInput>
    create: XOR<seatCreateWithoutPurchase_detailInput, seatUncheckedCreateWithoutPurchase_detailInput>
    where?: seatWhereInput
  }

  export type seatUpdateToOneWithWhereWithoutPurchase_detailInput = {
    where?: seatWhereInput
    data: XOR<seatUpdateWithoutPurchase_detailInput, seatUncheckedUpdateWithoutPurchase_detailInput>
  }

  export type seatUpdateWithoutPurchase_detailInput = {
    seat_num?: StringFieldUpdateOperationsInput | string
    carriage?: carriageUpdateOneRequiredWithoutSeatNestedInput
    seat_schedule?: seat_scheduleUpdateManyWithoutSeatNestedInput
  }

  export type seatUncheckedUpdateWithoutPurchase_detailInput = {
    id_seat?: IntFieldUpdateOperationsInput | number
    seat_num?: StringFieldUpdateOperationsInput | string
    id_carriage?: IntFieldUpdateOperationsInput | number
    seat_schedule?: seat_scheduleUncheckedUpdateManyWithoutSeatNestedInput
  }

  export type ticket_purchaseUpsertWithoutPurchase_detailInput = {
    update: XOR<ticket_purchaseUpdateWithoutPurchase_detailInput, ticket_purchaseUncheckedUpdateWithoutPurchase_detailInput>
    create: XOR<ticket_purchaseCreateWithoutPurchase_detailInput, ticket_purchaseUncheckedCreateWithoutPurchase_detailInput>
    where?: ticket_purchaseWhereInput
  }

  export type ticket_purchaseUpdateToOneWithWhereWithoutPurchase_detailInput = {
    where?: ticket_purchaseWhereInput
    data: XOR<ticket_purchaseUpdateWithoutPurchase_detailInput, ticket_purchaseUncheckedUpdateWithoutPurchase_detailInput>
  }

  export type ticket_purchaseUpdateWithoutPurchase_detailInput = {
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer_name?: StringFieldUpdateOperationsInput | string
    buyer_email?: StringFieldUpdateOperationsInput | string
    buyer_phone?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
    schedule?: scheduleUpdateOneRequiredWithoutTicket_purchaseNestedInput
    user?: userUpdateOneWithoutTicket_purchaseNestedInput
  }

  export type ticket_purchaseUncheckedUpdateWithoutPurchase_detailInput = {
    id_ticketpurchase?: IntFieldUpdateOperationsInput | number
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer_name?: StringFieldUpdateOperationsInput | string
    buyer_email?: StringFieldUpdateOperationsInput | string
    buyer_phone?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
    id_schedule?: IntFieldUpdateOperationsInput | number
    id_user?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type seat_scheduleUpsertWithWhereUniqueWithoutPurchase_detailInput = {
    where: seat_scheduleWhereUniqueInput
    update: XOR<seat_scheduleUpdateWithoutPurchase_detailInput, seat_scheduleUncheckedUpdateWithoutPurchase_detailInput>
    create: XOR<seat_scheduleCreateWithoutPurchase_detailInput, seat_scheduleUncheckedCreateWithoutPurchase_detailInput>
  }

  export type seat_scheduleUpdateWithWhereUniqueWithoutPurchase_detailInput = {
    where: seat_scheduleWhereUniqueInput
    data: XOR<seat_scheduleUpdateWithoutPurchase_detailInput, seat_scheduleUncheckedUpdateWithoutPurchase_detailInput>
  }

  export type seat_scheduleUpdateManyWithWhereWithoutPurchase_detailInput = {
    where: seat_scheduleScalarWhereInput
    data: XOR<seat_scheduleUpdateManyMutationInput, seat_scheduleUncheckedUpdateManyWithoutPurchase_detailInput>
  }

  export type carriageCreateWithoutTrainInput = {
    carriage_name: string
    quota: number
    carriage_category: $Enums.carriage_category
    seat?: seatCreateNestedManyWithoutCarriageInput
  }

  export type carriageUncheckedCreateWithoutTrainInput = {
    id_carriage?: number
    carriage_name: string
    quota: number
    carriage_category: $Enums.carriage_category
    seat?: seatUncheckedCreateNestedManyWithoutCarriageInput
  }

  export type carriageCreateOrConnectWithoutTrainInput = {
    where: carriageWhereUniqueInput
    create: XOR<carriageCreateWithoutTrainInput, carriageUncheckedCreateWithoutTrainInput>
  }

  export type carriageCreateManyTrainInputEnvelope = {
    data: carriageCreateManyTrainInput | carriageCreateManyTrainInput[]
    skipDuplicates?: boolean
  }

  export type scheduleCreateWithoutTrainInput = {
    schedule_name: string
    departure: string
    destination: string
    departure_date: Date | string
    arrival_date: Date | string
    price: number
    quota_total: number
    status?: $Enums.status
    seat_schedule?: seat_scheduleCreateNestedManyWithoutScheduleInput
    ticket_purchase?: ticket_purchaseCreateNestedManyWithoutScheduleInput
  }

  export type scheduleUncheckedCreateWithoutTrainInput = {
    id_schedule?: number
    schedule_name: string
    departure: string
    destination: string
    departure_date: Date | string
    arrival_date: Date | string
    price: number
    quota_total: number
    status?: $Enums.status
    seat_schedule?: seat_scheduleUncheckedCreateNestedManyWithoutScheduleInput
    ticket_purchase?: ticket_purchaseUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type scheduleCreateOrConnectWithoutTrainInput = {
    where: scheduleWhereUniqueInput
    create: XOR<scheduleCreateWithoutTrainInput, scheduleUncheckedCreateWithoutTrainInput>
  }

  export type scheduleCreateManyTrainInputEnvelope = {
    data: scheduleCreateManyTrainInput | scheduleCreateManyTrainInput[]
    skipDuplicates?: boolean
  }

  export type carriageUpsertWithWhereUniqueWithoutTrainInput = {
    where: carriageWhereUniqueInput
    update: XOR<carriageUpdateWithoutTrainInput, carriageUncheckedUpdateWithoutTrainInput>
    create: XOR<carriageCreateWithoutTrainInput, carriageUncheckedCreateWithoutTrainInput>
  }

  export type carriageUpdateWithWhereUniqueWithoutTrainInput = {
    where: carriageWhereUniqueInput
    data: XOR<carriageUpdateWithoutTrainInput, carriageUncheckedUpdateWithoutTrainInput>
  }

  export type carriageUpdateManyWithWhereWithoutTrainInput = {
    where: carriageScalarWhereInput
    data: XOR<carriageUpdateManyMutationInput, carriageUncheckedUpdateManyWithoutTrainInput>
  }

  export type carriageScalarWhereInput = {
    AND?: carriageScalarWhereInput | carriageScalarWhereInput[]
    OR?: carriageScalarWhereInput[]
    NOT?: carriageScalarWhereInput | carriageScalarWhereInput[]
    id_carriage?: IntFilter<"carriage"> | number
    carriage_name?: StringFilter<"carriage"> | string
    quota?: IntFilter<"carriage"> | number
    carriage_category?: Enumcarriage_categoryFilter<"carriage"> | $Enums.carriage_category
    id_train?: IntFilter<"carriage"> | number
  }

  export type scheduleUpsertWithWhereUniqueWithoutTrainInput = {
    where: scheduleWhereUniqueInput
    update: XOR<scheduleUpdateWithoutTrainInput, scheduleUncheckedUpdateWithoutTrainInput>
    create: XOR<scheduleCreateWithoutTrainInput, scheduleUncheckedCreateWithoutTrainInput>
  }

  export type scheduleUpdateWithWhereUniqueWithoutTrainInput = {
    where: scheduleWhereUniqueInput
    data: XOR<scheduleUpdateWithoutTrainInput, scheduleUncheckedUpdateWithoutTrainInput>
  }

  export type scheduleUpdateManyWithWhereWithoutTrainInput = {
    where: scheduleScalarWhereInput
    data: XOR<scheduleUpdateManyMutationInput, scheduleUncheckedUpdateManyWithoutTrainInput>
  }

  export type scheduleScalarWhereInput = {
    AND?: scheduleScalarWhereInput | scheduleScalarWhereInput[]
    OR?: scheduleScalarWhereInput[]
    NOT?: scheduleScalarWhereInput | scheduleScalarWhereInput[]
    id_schedule?: IntFilter<"schedule"> | number
    schedule_name?: StringFilter<"schedule"> | string
    departure?: StringFilter<"schedule"> | string
    destination?: StringFilter<"schedule"> | string
    departure_date?: DateTimeFilter<"schedule"> | Date | string
    arrival_date?: DateTimeFilter<"schedule"> | Date | string
    price?: FloatFilter<"schedule"> | number
    quota_total?: IntFilter<"schedule"> | number
    status?: EnumstatusFilter<"schedule"> | $Enums.status
    id_train?: IntFilter<"schedule"> | number
  }

  export type ticket_purchaseCreateWithoutUserInput = {
    purchase_date?: Date | string
    buyer_name: string
    buyer_email: string
    buyer_phone: string
    total_price: number
    purchase_detail?: purchase_detailCreateNestedManyWithoutTicket_purchaseInput
    schedule: scheduleCreateNestedOneWithoutTicket_purchaseInput
  }

  export type ticket_purchaseUncheckedCreateWithoutUserInput = {
    id_ticketpurchase?: number
    purchase_date?: Date | string
    buyer_name: string
    buyer_email: string
    buyer_phone: string
    total_price: number
    id_schedule: number
    purchase_detail?: purchase_detailUncheckedCreateNestedManyWithoutTicket_purchaseInput
  }

  export type ticket_purchaseCreateOrConnectWithoutUserInput = {
    where: ticket_purchaseWhereUniqueInput
    create: XOR<ticket_purchaseCreateWithoutUserInput, ticket_purchaseUncheckedCreateWithoutUserInput>
  }

  export type ticket_purchaseCreateManyUserInputEnvelope = {
    data: ticket_purchaseCreateManyUserInput | ticket_purchaseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ticket_purchaseUpsertWithWhereUniqueWithoutUserInput = {
    where: ticket_purchaseWhereUniqueInput
    update: XOR<ticket_purchaseUpdateWithoutUserInput, ticket_purchaseUncheckedUpdateWithoutUserInput>
    create: XOR<ticket_purchaseCreateWithoutUserInput, ticket_purchaseUncheckedCreateWithoutUserInput>
  }

  export type ticket_purchaseUpdateWithWhereUniqueWithoutUserInput = {
    where: ticket_purchaseWhereUniqueInput
    data: XOR<ticket_purchaseUpdateWithoutUserInput, ticket_purchaseUncheckedUpdateWithoutUserInput>
  }

  export type ticket_purchaseUpdateManyWithWhereWithoutUserInput = {
    where: ticket_purchaseScalarWhereInput
    data: XOR<ticket_purchaseUpdateManyMutationInput, ticket_purchaseUncheckedUpdateManyWithoutUserInput>
  }

  export type seatCreateManyCarriageInput = {
    id_seat?: number
    seat_num: string
  }

  export type seatUpdateWithoutCarriageInput = {
    seat_num?: StringFieldUpdateOperationsInput | string
    purchase_detail?: purchase_detailUpdateManyWithoutSeatNestedInput
    seat_schedule?: seat_scheduleUpdateManyWithoutSeatNestedInput
  }

  export type seatUncheckedUpdateWithoutCarriageInput = {
    id_seat?: IntFieldUpdateOperationsInput | number
    seat_num?: StringFieldUpdateOperationsInput | string
    purchase_detail?: purchase_detailUncheckedUpdateManyWithoutSeatNestedInput
    seat_schedule?: seat_scheduleUncheckedUpdateManyWithoutSeatNestedInput
  }

  export type seatUncheckedUpdateManyWithoutCarriageInput = {
    id_seat?: IntFieldUpdateOperationsInput | number
    seat_num?: StringFieldUpdateOperationsInput | string
  }

  export type seat_scheduleCreateManyScheduleInput = {
    id_seat_schedule?: number
    id_seat: number
    seatschedule_status?: $Enums.seatschedule_status
    purchaseDetailId_purchasedetail?: number | null
  }

  export type ticket_purchaseCreateManyScheduleInput = {
    id_ticketpurchase?: number
    purchase_date?: Date | string
    buyer_name: string
    buyer_email: string
    buyer_phone: string
    total_price: number
    id_user?: number | null
  }

  export type seat_scheduleUpdateWithoutScheduleInput = {
    seatschedule_status?: Enumseatschedule_statusFieldUpdateOperationsInput | $Enums.seatschedule_status
    purchase_detail?: purchase_detailUpdateOneWithoutSeat_scheduleNestedInput
    seat?: seatUpdateOneRequiredWithoutSeat_scheduleNestedInput
  }

  export type seat_scheduleUncheckedUpdateWithoutScheduleInput = {
    id_seat_schedule?: IntFieldUpdateOperationsInput | number
    id_seat?: IntFieldUpdateOperationsInput | number
    seatschedule_status?: Enumseatschedule_statusFieldUpdateOperationsInput | $Enums.seatschedule_status
    purchaseDetailId_purchasedetail?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type seat_scheduleUncheckedUpdateManyWithoutScheduleInput = {
    id_seat_schedule?: IntFieldUpdateOperationsInput | number
    id_seat?: IntFieldUpdateOperationsInput | number
    seatschedule_status?: Enumseatschedule_statusFieldUpdateOperationsInput | $Enums.seatschedule_status
    purchaseDetailId_purchasedetail?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ticket_purchaseUpdateWithoutScheduleInput = {
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer_name?: StringFieldUpdateOperationsInput | string
    buyer_email?: StringFieldUpdateOperationsInput | string
    buyer_phone?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
    purchase_detail?: purchase_detailUpdateManyWithoutTicket_purchaseNestedInput
    user?: userUpdateOneWithoutTicket_purchaseNestedInput
  }

  export type ticket_purchaseUncheckedUpdateWithoutScheduleInput = {
    id_ticketpurchase?: IntFieldUpdateOperationsInput | number
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer_name?: StringFieldUpdateOperationsInput | string
    buyer_email?: StringFieldUpdateOperationsInput | string
    buyer_phone?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
    id_user?: NullableIntFieldUpdateOperationsInput | number | null
    purchase_detail?: purchase_detailUncheckedUpdateManyWithoutTicket_purchaseNestedInput
  }

  export type ticket_purchaseUncheckedUpdateManyWithoutScheduleInput = {
    id_ticketpurchase?: IntFieldUpdateOperationsInput | number
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer_name?: StringFieldUpdateOperationsInput | string
    buyer_email?: StringFieldUpdateOperationsInput | string
    buyer_phone?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
    id_user?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type purchase_detailCreateManySeatInput = {
    id_purchasedetail?: number
    buyer_name: string
    buyer_email: string
    buyer_phone: string
    total_price: number
    id_ticket_purchase: number
  }

  export type seat_scheduleCreateManySeatInput = {
    id_seat_schedule?: number
    id_schedule: number
    seatschedule_status?: $Enums.seatschedule_status
    purchaseDetailId_purchasedetail?: number | null
  }

  export type purchase_detailUpdateWithoutSeatInput = {
    buyer_name?: StringFieldUpdateOperationsInput | string
    buyer_email?: StringFieldUpdateOperationsInput | string
    buyer_phone?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
    ticket_purchase?: ticket_purchaseUpdateOneRequiredWithoutPurchase_detailNestedInput
    seat_schedule?: seat_scheduleUpdateManyWithoutPurchase_detailNestedInput
  }

  export type purchase_detailUncheckedUpdateWithoutSeatInput = {
    id_purchasedetail?: IntFieldUpdateOperationsInput | number
    buyer_name?: StringFieldUpdateOperationsInput | string
    buyer_email?: StringFieldUpdateOperationsInput | string
    buyer_phone?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
    id_ticket_purchase?: IntFieldUpdateOperationsInput | number
    seat_schedule?: seat_scheduleUncheckedUpdateManyWithoutPurchase_detailNestedInput
  }

  export type purchase_detailUncheckedUpdateManyWithoutSeatInput = {
    id_purchasedetail?: IntFieldUpdateOperationsInput | number
    buyer_name?: StringFieldUpdateOperationsInput | string
    buyer_email?: StringFieldUpdateOperationsInput | string
    buyer_phone?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
    id_ticket_purchase?: IntFieldUpdateOperationsInput | number
  }

  export type seat_scheduleUpdateWithoutSeatInput = {
    seatschedule_status?: Enumseatschedule_statusFieldUpdateOperationsInput | $Enums.seatschedule_status
    purchase_detail?: purchase_detailUpdateOneWithoutSeat_scheduleNestedInput
    schedule?: scheduleUpdateOneRequiredWithoutSeat_scheduleNestedInput
  }

  export type seat_scheduleUncheckedUpdateWithoutSeatInput = {
    id_seat_schedule?: IntFieldUpdateOperationsInput | number
    id_schedule?: IntFieldUpdateOperationsInput | number
    seatschedule_status?: Enumseatschedule_statusFieldUpdateOperationsInput | $Enums.seatschedule_status
    purchaseDetailId_purchasedetail?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type seat_scheduleUncheckedUpdateManyWithoutSeatInput = {
    id_seat_schedule?: IntFieldUpdateOperationsInput | number
    id_schedule?: IntFieldUpdateOperationsInput | number
    seatschedule_status?: Enumseatschedule_statusFieldUpdateOperationsInput | $Enums.seatschedule_status
    purchaseDetailId_purchasedetail?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type purchase_detailCreateManyTicket_purchaseInput = {
    id_purchasedetail?: number
    buyer_name: string
    buyer_email: string
    buyer_phone: string
    total_price: number
    id_seat: number
  }

  export type purchase_detailUpdateWithoutTicket_purchaseInput = {
    buyer_name?: StringFieldUpdateOperationsInput | string
    buyer_email?: StringFieldUpdateOperationsInput | string
    buyer_phone?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
    seat?: seatUpdateOneRequiredWithoutPurchase_detailNestedInput
    seat_schedule?: seat_scheduleUpdateManyWithoutPurchase_detailNestedInput
  }

  export type purchase_detailUncheckedUpdateWithoutTicket_purchaseInput = {
    id_purchasedetail?: IntFieldUpdateOperationsInput | number
    buyer_name?: StringFieldUpdateOperationsInput | string
    buyer_email?: StringFieldUpdateOperationsInput | string
    buyer_phone?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
    id_seat?: IntFieldUpdateOperationsInput | number
    seat_schedule?: seat_scheduleUncheckedUpdateManyWithoutPurchase_detailNestedInput
  }

  export type purchase_detailUncheckedUpdateManyWithoutTicket_purchaseInput = {
    id_purchasedetail?: IntFieldUpdateOperationsInput | number
    buyer_name?: StringFieldUpdateOperationsInput | string
    buyer_email?: StringFieldUpdateOperationsInput | string
    buyer_phone?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
    id_seat?: IntFieldUpdateOperationsInput | number
  }

  export type seat_scheduleCreateManyPurchase_detailInput = {
    id_seat_schedule?: number
    id_seat: number
    id_schedule: number
    seatschedule_status?: $Enums.seatschedule_status
  }

  export type seat_scheduleUpdateWithoutPurchase_detailInput = {
    seatschedule_status?: Enumseatschedule_statusFieldUpdateOperationsInput | $Enums.seatschedule_status
    schedule?: scheduleUpdateOneRequiredWithoutSeat_scheduleNestedInput
    seat?: seatUpdateOneRequiredWithoutSeat_scheduleNestedInput
  }

  export type seat_scheduleUncheckedUpdateWithoutPurchase_detailInput = {
    id_seat_schedule?: IntFieldUpdateOperationsInput | number
    id_seat?: IntFieldUpdateOperationsInput | number
    id_schedule?: IntFieldUpdateOperationsInput | number
    seatschedule_status?: Enumseatschedule_statusFieldUpdateOperationsInput | $Enums.seatschedule_status
  }

  export type seat_scheduleUncheckedUpdateManyWithoutPurchase_detailInput = {
    id_seat_schedule?: IntFieldUpdateOperationsInput | number
    id_seat?: IntFieldUpdateOperationsInput | number
    id_schedule?: IntFieldUpdateOperationsInput | number
    seatschedule_status?: Enumseatschedule_statusFieldUpdateOperationsInput | $Enums.seatschedule_status
  }

  export type carriageCreateManyTrainInput = {
    id_carriage?: number
    carriage_name: string
    quota: number
    carriage_category: $Enums.carriage_category
  }

  export type scheduleCreateManyTrainInput = {
    id_schedule?: number
    schedule_name: string
    departure: string
    destination: string
    departure_date: Date | string
    arrival_date: Date | string
    price: number
    quota_total: number
    status?: $Enums.status
  }

  export type carriageUpdateWithoutTrainInput = {
    carriage_name?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
    carriage_category?: Enumcarriage_categoryFieldUpdateOperationsInput | $Enums.carriage_category
    seat?: seatUpdateManyWithoutCarriageNestedInput
  }

  export type carriageUncheckedUpdateWithoutTrainInput = {
    id_carriage?: IntFieldUpdateOperationsInput | number
    carriage_name?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
    carriage_category?: Enumcarriage_categoryFieldUpdateOperationsInput | $Enums.carriage_category
    seat?: seatUncheckedUpdateManyWithoutCarriageNestedInput
  }

  export type carriageUncheckedUpdateManyWithoutTrainInput = {
    id_carriage?: IntFieldUpdateOperationsInput | number
    carriage_name?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
    carriage_category?: Enumcarriage_categoryFieldUpdateOperationsInput | $Enums.carriage_category
  }

  export type scheduleUpdateWithoutTrainInput = {
    schedule_name?: StringFieldUpdateOperationsInput | string
    departure?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departure_date?: DateTimeFieldUpdateOperationsInput | Date | string
    arrival_date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    quota_total?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    seat_schedule?: seat_scheduleUpdateManyWithoutScheduleNestedInput
    ticket_purchase?: ticket_purchaseUpdateManyWithoutScheduleNestedInput
  }

  export type scheduleUncheckedUpdateWithoutTrainInput = {
    id_schedule?: IntFieldUpdateOperationsInput | number
    schedule_name?: StringFieldUpdateOperationsInput | string
    departure?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departure_date?: DateTimeFieldUpdateOperationsInput | Date | string
    arrival_date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    quota_total?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    seat_schedule?: seat_scheduleUncheckedUpdateManyWithoutScheduleNestedInput
    ticket_purchase?: ticket_purchaseUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type scheduleUncheckedUpdateManyWithoutTrainInput = {
    id_schedule?: IntFieldUpdateOperationsInput | number
    schedule_name?: StringFieldUpdateOperationsInput | string
    departure?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departure_date?: DateTimeFieldUpdateOperationsInput | Date | string
    arrival_date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    quota_total?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
  }

  export type ticket_purchaseCreateManyUserInput = {
    id_ticketpurchase?: number
    purchase_date?: Date | string
    buyer_name: string
    buyer_email: string
    buyer_phone: string
    total_price: number
    id_schedule: number
  }

  export type ticket_purchaseUpdateWithoutUserInput = {
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer_name?: StringFieldUpdateOperationsInput | string
    buyer_email?: StringFieldUpdateOperationsInput | string
    buyer_phone?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
    purchase_detail?: purchase_detailUpdateManyWithoutTicket_purchaseNestedInput
    schedule?: scheduleUpdateOneRequiredWithoutTicket_purchaseNestedInput
  }

  export type ticket_purchaseUncheckedUpdateWithoutUserInput = {
    id_ticketpurchase?: IntFieldUpdateOperationsInput | number
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer_name?: StringFieldUpdateOperationsInput | string
    buyer_email?: StringFieldUpdateOperationsInput | string
    buyer_phone?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
    id_schedule?: IntFieldUpdateOperationsInput | number
    purchase_detail?: purchase_detailUncheckedUpdateManyWithoutTicket_purchaseNestedInput
  }

  export type ticket_purchaseUncheckedUpdateManyWithoutUserInput = {
    id_ticketpurchase?: IntFieldUpdateOperationsInput | number
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer_name?: StringFieldUpdateOperationsInput | string
    buyer_email?: StringFieldUpdateOperationsInput | string
    buyer_phone?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
    id_schedule?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}