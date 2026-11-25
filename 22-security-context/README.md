# Q22. Set a Pod Security Context (Advanced)

## Objective

Create a Kubernetes Pod named `security-context-demo` using `busybox:latest` and configure its security context to run the container process with:

- User ID (UID): `1000`
- Group ID (GID): `2000`

The objective is to run the container as a non-root user and verify its effective identity.

## Concepts Learned

### 1. What is Security Context?

A Security Context defines security-related settings for Pods and containers.

It controls:
- User ID used to run processes.
- Group ID used by processes.
- Privilege and permission settings.
- Filesystem security settings.
- Linux capabilities.

### 2. Understanding UID and GID

| Term | Meaning |
|---|---|
| UID | User ID |
| GID | Group ID |
| UID 0 | Root user |
| UID 1000 | Non-root user |

Running containers as non-root users helps reduce security risks and follows the principle of least privilege.

### 3. runAsUser

`runAsUser` specifies the user ID under which container processes run.

Configured value:

```yaml
runAsUser: 1000
```

### 4. runAsGroup

`runAsGroup` specifies the primary group ID for container processes.

Configured value:

```yaml
runAsGroup: 2000
```

## Implementation

Created a YAML manifest:

`security-context.yaml`

The Pod-level security context was configured inside the Pod specification.

### Kubernetes Manifest

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: security-context-demo
spec:
  securityContext:
    runAsUser: 1000
    runAsGroup: 2000
  containers:
    - name: busybox-container
      image: busybox:latest
      command: ["sh", "-c", "sleep 3600"]
```

## Deployment

Applied the manifest:

```bash
kubectl apply -f security-context.yaml
```

Checked Pod status:

```bash
kubectl get pods
```

Inspected Pod configuration:

```bash
kubectl describe pod security-context-demo
```

## Verification

Executed the Linux identity command inside the container:

```bash
kubectl exec security-context-demo -- id
```

### Expected Output

```text
uid=1000 gid=2000
```

**Explanation:**

- UID `1000` confirms the process is running as the configured user.
- GID `2000` confirms the configured primary group.
- UID is not `0`, so the process is not running as root.

## Troubleshooting

If the Pod fails to start or the configuration is rejected, inspect its details and events:

```bash
kubectl describe pod security-context-demo
```

Check container logs:

```bash
kubectl logs security-context-demo
```

Check Kubernetes events:

```bash
kubectl get events
```

Possible issues include image-pulling failures, invalid configurations, admission-policy restrictions, or container runtime errors.

Always inspect the actual event message instead of assuming the cause.

## Important Interview Questions

**1. What is a Kubernetes Security Context?**

It defines security settings that control how a Pod or container runs, including user identity, group identity, privileges, and permissions.

**2. What is runAsUser?**

It specifies the UID used to execute processes inside a container.

**3. What is runAsGroup?**

It specifies the primary GID used by processes inside a container.

**4. Why should containers run as non-root users?**

Running containers as non-root reduces the impact of potential security vulnerabilities and follows the principle of least privilege.

**5. What is the difference between Pod-level and Container-level Security Context?**

Pod-level security settings provide defaults for containers in the Pod, while container-level settings apply to an individual container and can override supported Pod-level settings.

**6. How do you verify whether a container is running as root?**

Execute the Linux `id` command inside the container and inspect its effective UID. UID `0` indicates root.

## Conclusion

Practiced configuring a Pod-level Security Context using `runAsUser` and `runAsGroup`.

Learned how to run container processes as non-root users, verify Linux user and group identities, and inspect Kubernetes events for troubleshooting.

**Status: Completed after successful UID/GID verification.**
