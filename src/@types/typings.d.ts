/**
 * Enable import JSON files in our Typescript code
 */
declare module '*.json' {
  const value: any;
  export default value;
}
