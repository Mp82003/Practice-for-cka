# Q19. Create a Multi-Container Pod (Intermediate)

## Objective
Create a Kubernetes Pod named `two-container-pod` containing two containers:
- **nginx-container** using `nginx:latest`
- **busybox-container** using `busybox:latest`

Both containers run inside the same Pod.

## Concepts Learned

### 1. Multi-Container Pod
A Kubernetes Pod can contain multiple containers. These containers:
- Share the same network namespace.
- Share the same Pod IP address.
- Can communicate with each other using `localhost`.
- Can share storage through explicitly configured Volumes.

### 2. Nginx Container
Nginx is a web server used to serve web content.

- Container Name: `nginx-container`
- Image: `nginx:latest`

### 3. BusyBox Container
BusyBox is a lightweight Linux utility image that provides several basic Linux commands.

- Container Name: `busybox-container`
- Image: `busybox:latest`

A long-running sleep command keeps the BusyBox container alive instead of allowing it to exit immediately.

## Implementation

Created a single Pod manifest named:

`multi-pod.yaml`

The manifest defines both containers under the same `spec.containers` list.

## Deployment

Applied the Kubernetes manifest:

```bash
kubectl apply -f multi-pod.yaml
```

## Troubleshooting

### Issue 1: Kubernetes API Server Connection Refused

**Error:**
```text
failed to download openapi
connect: connection refused
```

**Cause:** Kubernetes API Server was unavailable.

**Learning:** Check Minikube status and cluster connectivity before applying manifests.

### Issue 2: Incorrect YAML Field Name

**Error:**
```text
unknown field "spec.conatiners"
```

**Cause:** Typographical error in the `containers` field.

**Solution:** Corrected the field spelling to `containers`.

**Learning:** Kubernetes YAML manifests require correct field names and strict schema validation.

### Issue 3: BusyBox ImagePullBackOff

**Error:**
```text
ImagePullBackOff
manifest for busybox:layest not found
```

**Cause:** Incorrect image tag (`layest` instead of `latest`).

**Solution:** Corrected the BusyBox image tag.

**Learning:** Always verify Docker image names and tags.

## Verification Commands

Check Pod status:

```bash
kubectl get pods
```

Watch Pod status:

```bash
kubectl get pods -w
```

Inspect Pod details:

```bash
kubectl describe pod two-container-pod
```

## Expected Result

| Container | Expected Status |
|---|---|
| nginx-container | Running |
| busybox-container | Running |

**Pod Status:** `Running`

**Ready:** `2/2`

## Key Interview Questions

**1. What is a Multi-Container Pod?**

A Multi-Container Pod is a Kubernetes Pod that runs multiple containers together, sharing networking and potentially storage through volumes.

**2. Why can containers in the same Pod communicate using localhost?**

Because all containers in a Pod share the same network namespace and localhost interface.

**3. Do containers in the same Pod share the filesystem?**

No. Containers have separate filesystems by default. They can share files through Kubernetes Volumes.

**4. Why do we use a sleep command in BusyBox?**

To keep the container running instead of exiting immediately after executing its default command.

**5. What is ImagePullBackOff?**

It indicates Kubernetes failed to pull a container image and is waiting before retrying.

## Conclusion

Successfully practiced the creation and troubleshooting of a Multi-Container Pod using Nginx and BusyBox.

Learned about container networking, localhost communication, image pulling, YAML validation, and Pod inspection.

**Status:** Practice completed after successful verification of both containers.
