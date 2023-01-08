module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_XbvPTjO5F4dVT8I2gcVrcIPvOtMH/MIFEejh6aI",
        apiToken: "lnUykp5BZGVMAWGKNX0GZgwO",
        appFilter: "e-com",
        teamFilter: "REE2gSHCv7glPF5PqjIomTQQ",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
  });