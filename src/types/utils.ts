export type LiteralUnion<
	LiteralType,
	BaseType extends Primitive,
> = LiteralType | (BaseType & Record<never, never>);

export type Primitive = (
	| null
	| undefined
	| string
	| number
	| boolean
	| symbol
	| bigint
);

export type ObjectType<
	Typename extends string,
	Props extends Record<string, unknown> = Record<string, unknown>
> = (
  & { type: Typename }
  & Props
);
