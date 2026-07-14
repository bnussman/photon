export default {
  input: './openapi.json',
  output: 'src',
  plugins: ['@hey-api/client-fetch'],
  parser: {
    transforms: {
      propertiesRequiredByDefault: true,
    },
  },
};
