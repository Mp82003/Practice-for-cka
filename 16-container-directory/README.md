# Q16 – Define a Container Working Directory

## Objective

Create a Pod named `workdir-demo` using `busybox:latest` with the container working directory set to `/work`.

## Requirements

- Use a YAML manifest.
- Set `workingDir: /work` in the container specification.
- Execute a command that prints the current working directory.
- Set `restartPolicy: Never`.
- Verify the Pod reaches `Completed`.
- Inspect container logs to confirm the output is `/work`.

## 1. YAML Manifest

File: `workdir-demo.yaml`

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: workdir-demo
spec:
  restartPolicy: Never
  containers:
    - name: workdir-demo
      image: busybox:latest
      workingDir: /work
      command: ["sh", "-c", "pwd"]
```

## 2. Apply the Manifest

```bash
kubectl apply -f workdir-demo.yaml
```

## 3. Check Pod Status

```bash
kubectl get pod workdir-demo
```

Expected status:

```text
NAME           READY   STATUS      RESTARTS
workdir-demo   0/1     Completed   0
```

## 4. Check Container Logs

```bash
kubectl logs workdir-demo
```

Expected output:

```text
/work
```

## 5. Key Concepts Learned

### Working Directory

A working directory is the default directory from which processes execute inside a container.

### workingDir

The `workingDir` field specifies the working directory for the container.

### pwd

The `pwd` Linux command prints the current working directory.

### restartPolicy: Never

Prevents Kubernetes from restarting the container after it exits.

## 6. Result

- [x] Created `workdir-demo.yaml`.
- [x] Used `busybox:latest`.
- [x] Set `workingDir: /work`.
- [x] Executed the `pwd` command.
- [x] Configured `restartPolicy: Never`.
- [x] Verified the expected `/work` output in logs.

**Status: Completed after verification.**

