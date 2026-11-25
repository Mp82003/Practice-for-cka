# Q20. Execute a Command Inside a Container (Intermediate)

## Objective

Execute commands inside both containers of an existing Kubernetes Pod named `two-container-pod` without deleting or recreating the Pod.

The Pod contains:
- `nginx-container`
- `busybox-container`

## Concepts Learned

### 1. kubectl exec

`kubectl exec` is used to execute commands inside a running container without restarting or recreating the Pod.

It is useful for:
- Debugging containers.
- Executing Linux commands.
- Inspecting container environments.
- Troubleshooting running applications.

### 2. Container Selection

When a Pod contains multiple containers, the `-c` option specifies which container should execute the command.

### 3. Shell Execution

The `sh -c` combination allows us to execute shell commands inside a container.

The `echo` command prints a custom message to the terminal.

## Practical Implementation

### Task 1: Execute hostname inside Nginx

Command:

```bash
kubectl exec two-container-pod -c nginx-container -- hostname
```

Output:

```text
two-container-pod
```

**Explanation:**

- `kubectl exec`: Executes a command inside a container.
- `two-container-pod`: Specifies the Pod.
- `-c nginx-container`: Selects the Nginx container.
- `-- hostname`: Executes the hostname command.

### Task 2: Execute a custom message inside BusyBox

Command:

```bash
kubectl exec two-container-pod -c busybox-container -- sh -c "echo 'Hello Muskan, BusyBox is working'"
```

Output:

```text
Hello Muskan, BusyBox is working
```

**Explanation:**

- `kubectl exec`: Executes a command inside the container.
- `-c busybox-container`: Selects the BusyBox container.
- `sh`: Starts the shell.
- `-c`: Executes the provided command string.
- `echo`: Prints the custom message.

## Troubleshooting

### Issue: Bash History Expansion

Initial command containing an exclamation mark:

```bash
kubectl exec two-container-pod -c busybox-container -- sh -c "echo 'Hello Muskan, BusyBox is working!'"
```

Error:

```text
-bash: !': event not found
```

**Cause:** Bash interpreted the `!` character as a history expansion character.

**Solution:** Removed the exclamation mark from the message and executed the command successfully.

## Important Kubernetes Commands

| Command | Purpose |
|---|---|
| `kubectl exec` | Execute commands inside a container |
| `kubectl exec -it` | Open an interactive terminal |
| `kubectl describe pod` | Inspect Pod details |
| `kubectl logs` | View container logs |
| `kubectl get pods` | Check Pod status |

## Interview Questions

**1. What is kubectl exec?**

It is a Kubernetes command used to execute commands inside a running container.

**2. Why do we use -c in kubectl exec?**

The `-c` option specifies the container name when a Pod contains multiple containers.

**3. Does kubectl exec recreate the Pod?**

No. It executes commands inside the existing running container.

**4. What is the purpose of sh -c?**

It starts a shell and executes the provided command string.

**5. What is the difference between kubectl exec and kubectl logs?**

- `kubectl exec` executes commands inside a container.
- `kubectl logs` displays the container's application logs.

**6. Is kubectl exec useful for troubleshooting?**

Yes. It helps inspect running containers and execute diagnostic commands.

## Conclusion

Successfully executed commands inside both Nginx and BusyBox containers using `kubectl exec`.

Practiced container selection, shell command execution, hostname inspection, and custom message printing without deleting or recreating the Pod.

**Status: Completed**
