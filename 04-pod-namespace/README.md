# Q04 – Create and Use a Kubernetes Namespace

## Objective

Create a Kubernetes namespace named `dev-environment` and deploy an NGINX Pod named `dev-nginx` inside that namespace.

## Requirements

- Create a namespace named `dev-environment`.
- Create a Pod named `dev-nginx`.
- Use the `nginx:latest` container image.
- Explicitly specify the target namespace.
- Verify the Pod in `dev-environment`.
- Confirm the Pod does not exist in the default namespace.
- Display all available namespaces.

## Environment

| Tool | Details |
|---|---|
| OS | Ubuntu (WSL2) |
| Kubernetes Cluster | Minikube |
| CLI | kubectl |
| Namespace | dev-environment |
| Pod | dev-nginx |
| Image | nginx:latest |

## Implementation

### 1. Create Namespace

```bash
kubectl create namespace dev-environment
```

### 2. Create Pod in the Specific Namespace

```bash
kubectl run dev-nginx --image=nginx:latest -n dev-environment
```

### 3. Verify Pod in dev-environment

```bash
kubectl get pod dev-nginx -n dev-environment
```

Observed result:

```text
NAME        READY   STATUS    RESTARTS
dev-nginx   1/1     Running   0
```

### 4. Verify Pod in Default Namespace

```bash
kubectl get pod dev-nginx
```

Observed result:

```text
Error from server (NotFound): pods "dev-nginx" not found
```

This confirms that the Pod is not present in the default namespace.

### 5. List All Namespaces

```bash
kubectl get namespaces
```

The output confirmed that `dev-environment` exists and its status is `Active`.

## Final Verification

| Requirement | Result |
|---|---|
| Namespace created | dev-environment |
| Namespace status | Active |
| Pod name | dev-nginx |
| Container image | nginx:latest |
| Pod namespace | dev-environment |
| Pod status | Running |
| Ready status | 1/1 |
| Pod in default namespace | Not Found |

## Key Learnings

1. Understanding Kubernetes namespaces.
2. Creating namespaces using imperative commands.
3. Deploying Pods into a specific namespace.
4. Using the `-n` namespace flag.
5. Understanding the default namespace.
6. Listing namespaces using kubectl.
7. Verifying resource isolation between namespaces.

## Final Result

Successfully created the `dev-environment` namespace and deployed the `dev-nginx` Pod inside it.

Verified that the Pod is Running and Ready 1/1 in the correct namespace and is not present in the default namespace.

**Status: Completed ✅**

---

*Part of my Kubernetes and CKA hands-on practice journey.*
