## ✅ Setting up environment

1. Install Docker
2. Run the following command to install everything and run the container:

```
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
```

3. Go to localhost:3000 and start developing

**NOTE**
When you want to start the container later, as long as you havn't modified the docker files, you can simply do the same command, but without the `--build` flag.
You only need build when running for the first time, or you made a change in the Docker Related Files.
