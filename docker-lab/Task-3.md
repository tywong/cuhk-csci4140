# Task 3: Creating Your Customized Image

## Command List

Commands | Descriptions
-------- | ------------
`docker run -it ubuntu /bin/bash` | Start a container with an interactive shell.
Inside the shell, run<br/>`apt-get update`<br/>`apt-get install -y apache2` | You are installing the apache web server.
When the installation finishes, exit the shell. | You now have a modified container. What to do next?
`docker commit -m "first commit" -a "Your dockerhub ID" [CONTAINER ID] [New Image Name]` | You are creating your first Docker image!
`docker push [New Image Name]` | Make your first Docker image public!
`docker pull [New Image Name]` | Certainly, you should welcome your friend to pull your image!

## Your Try

Let us try out the above commands one by one!

1. Run `docker run -it ubuntu /bin/bash`.

2. Inside the shell, we are going to create a customized image.
  - `apt-get update` is to update the software list.
  - `apt-get install -y` allows you to skip the "Y/N" questions and makes "Yes" the default choice.
  - You must install `apache2` so that we can continue our lab.
  - You can install more software. Yet, you may need more time in transferring your image.

3. Next, exit the shell.

4. You should be back to your host computer. Now, commit your image. The following is an example command:
  ```
  docker commit -m "first commit" -a "tywong" 6a06fa59dbde tywong/mole-web-server
  ```
  - This command creates a new image called `tywong/mole-web-server`. You can check this out using `docker images`.
  - The format of the image name is a requirement. You can try other formats. But, you may not be able to push it to Docker Hub.

5. Last, you can make your image public by pushing it to Docker Hub. The following is an example command:
  ```
  docker push tywong/mole-web-server
  ```

6. Since every image is public by default, you can pull your friend's image if you know the image name. For example:
  ```
  docker pull stranger/web-server
  ```

7. If you don't want to keep a particular image inside your VM, you can delete by:
  ```
  docker rmi stranger/web-server
  ```

Remember, you must keep your image with `apache2` installed.
---
By [Dr. WONG Tsz Yeung](http://www.cse.cuhk.edu.hk/~tywong)
