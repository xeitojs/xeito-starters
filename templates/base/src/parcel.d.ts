
/**
 * Declaration to allow import of css / scss / sass files in TypeScript
 * This is required to allow TypeScript to compile without errors with Parcel
 * If you are not using Parcel, you can safely remove this file and find another way to import your styles
 * 
 * @see {@link https://github.com/parcel-bundler/parcel/issues/616}
 */

declare module '*.module.scss' {
  const classes: Record<string, string>;
  export default classes;
}

declare module '*.module.sass' {
  const classes: Record<string, string>;
  export default classes;
}

declare module '*.module.css' {
  const classes: Record<string, string>;
  export default classes;
}
