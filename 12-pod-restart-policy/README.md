# Q12 – Create a Pod with a Specific Restart Policy

## Objective

Create a Pod named `restart-never-pod` using `busybox:latest` with `restartPolicy` set to `Never`.

The Pod must execute:

```bash
sh -c 'echo CKA-practice; sleep 20'
```

## Requirements

- Create a YAML manifest named `restart-never-pod.yaml`.
- Set `restartPolicy: Never` at the Pod spec level.
- Apply the YAML manifest.
- Inspect the Pod while it is running.
- Check its final phase after the command completes.
- Verify that the container does not restart.

## 1. YAML Manifest

File: `restart-never-pod.yaml`

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: restart-never-pod
spec:
  restartPolicy: Never
  containers:
    - name: restart-never-pod
      image: busybox:latest
      command: ["sh", "-c", "echo CKA-practice; sleep 20"]
```

## 2. Apply the Manifest

```bash
kubectl apply -f restart-never-pod.yaml
```

**Output:**

```text
pod/restart-never-pod created
```

## 3. Inspect Pod While Running

```bash
kubectl get pod restart-never-pod -w
```

**Observed lifecycle:**

```text
NAME                READY   STATUS    RESTARTS
restart-never-pod   1/1     Running   0
```

## 4. Check Final Pod Status

```bash
kubectl get pod restart-never-pod
```

**Final Output:**

```text
NAME                READY   STATUS      RESTARTS
restart-never-pod   0/1     Completed   0
```

## 5. Key Concepts Learned

### What is Restart Policy?

Restart Policy determines whether Kubernetes should restart a container when it exits.

Kubernetes supports three restart policies:

| Policy | Behaviour |
|---|---|
| Always | Restarts the container whenever it exits. |
| OnFailure | Restarts the container when it exits with a non-zero exit code. |
| Never | Never restarts the container after it exits. |

### Why did the Pod reach Completed?

The container successfully executed the command, printed `CKA-practice`, slept for 20 seconds, and exited with status code 0.

Because `restartPolicy` was set to `Never`, Kubernetes did not restart the container.

The Pod reached the `Completed` phase with a restart count of `0`.

## 6. Important Note

Initially, the Pod showed `ErrImagePull` and `ImagePullBackOff`. The image was eventually pulled successfully, and the container started running.

## 7. Result

- [x] Created `restart-never-pod.yaml`.
- [x] Used `busybox:latest`.
- [x] Set `restartPolicy: Never`.
- [x] Executed the required command.
- [x] Inspected the Pod while running.
- [x] Verified final phase as `Completed`.
- [x] Confirmed restart count was `0`.

**Status: Completed**

