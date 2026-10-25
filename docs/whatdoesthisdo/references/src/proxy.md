## `src/proxy.ts`

### [proxy(request)](../../../../src/proxy.ts#L7)

Answers an unknown Workshop entry such as `/workshop/nope` with a real 404 status before any page renders.

- In: `request`, the incoming request for a `/workshop/<id>` path, page loads and client navigations alike.
- Out: for an id the entry list knows, the request goes on to the entry page unchanged. For any other id, the request is rewritten to `/404`, a path no route matches, so the root 404 page renders with status 404 and the URL stays as typed.
- The entry page cannot do this itself. Its prerendered shell streams with status 200 before the id is read, so a `notFound()` there only adds `noindex`.

## Constants

- [`config`](../../../../src/proxy.ts#L4): limits the proxy to one-segment Workshop paths, `/workshop/:entry`, so the home page, `/workshop` and static files never run it.
