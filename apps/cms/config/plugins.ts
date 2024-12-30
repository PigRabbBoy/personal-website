export default ({ env }) => ({
  ckeditor: {
    enabled: true,
  },
  seo: {
    enabled: true,
  },
  upload: {
    config: {
      provider: '@strapi/provider-upload-aws-s3',
      providerOptions: {
        credentials: {
          accessKeyId: env('S3_ACCESS_KEY_ID'),
          secretAccessKey: env('S3_SECRET_ACCESS_KEY'),
        },
        region: 'auto',
        params: {
          Bucket: env('S3_BUCKET_NAME'),
          ACL: 'public-read',
        },
        endpoint: env('S3_ENDPOINT_URL'),
        s3ForcePathStyle: true,
        baseUrl: env('STORAGE_URL'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
