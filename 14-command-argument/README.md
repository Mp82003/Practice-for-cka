# Q14 – Run a Command in a Pod

## Objective

Create a Pod named `command-demo` using `busybox:latest`.

The container must print `Container started` and remain running for 300 seconds.

## Requirements

- Use a YAML manifest.
- Specify `command` and `args` separately.
- Print the exact message `Container started`.
- Keep the container running for 300 seconds.
- Verify that the Pod is Running.
- Check the container logs.

## 1. YAML Manifest

File: `command-demo.yaml`

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: command-demo
spec:
  containers:
    - name: command-demo
      image: busybox:latest
      command: ["sh", "-c"]
      args: ["echo Container started; sleep 300"]
```

## 2. Apply the Manifest

```bash
kubectl apply -f command-demo.yaml
```

## 3. Verify Pod Status

```bash
kubectl get pod command-demo
```

Expected output:

```text
NAME           READY   STATUS    RESTARTS
command-demo   1/1     Running   0
```

## 4. Check Container Logs

```bash
kubectl logs command-demo
```

Expected output:

```text
Container started
```

## 5. Key Concepts Learned

### command

Specifies the executable that runs when the container starts.

### args

Specifies the arguments passed to the command.

### Shell Execution

- `sh`: Starts the shell.
- `-c`: Tells the shell to execute the supplied command string.
- `echo`: Prints the specified message.
- `sleep 300`: Keeps the process running for 300 seconds.

## 6. Result

- [x] Created `command-demo.yaml`.
- [x] Used `busybox:latest`.
- [x] Specified `command` and `args` separately.
- [x] Printed `Container started`.
- [x] Kept the container running for 300 seconds.
- [x] Verified Pod status and container logs.

**Status: Completed after verification.**

