# Novellia SDK - Go (Server)

This Novellia SDK is for the Novellia microservice. It should not be used by clients.

## Regenerating the SDK

There are some minor changes that need to be made after regenerating the SDK.

- Add the `"mime/multipart"` import to `v0/routers.go`
- Edit `v0/model_product_product.go` to use pointer types for
  -	`Extended721Token`
  - `NovelliaStandardToken`
  - `NativeToken`
  - `NovelliaProduct`
  - Otherwise JSON responses will return annoying empty objects. (`omitempty` won't work)
- Replace `NewRouter` to use CORS middleware in `routers.go`

```
// remove import "github.com/gorilla/handlers"

func CORSMiddleware(r *mux.Router) mux.MiddlewareFunc {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(rw http.ResponseWriter, req *http.Request) {
			if origin := req.Header.Get("Origin"); origin != "" {
					rw.Header().Set("Access-Control-Allow-Origin", origin)
					rw.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
					rw.Header().Set("Access-Control-Allow-Headers", "Accept, Accept-Language, Content-Type")
			}
			// Stop here if its Preflighted OPTIONS request
			if req.Method == "OPTIONS" {
					return
			}

			next.ServeHTTP(rw, req)
		})
	}
}

// NewRouter creates a new router for any number of api routers
func NewRouter(routers ...Router) *mux.Router {
	router := mux.NewRouter().StrictSlash(true)
	router.Use(CORSMiddleware(router))

	for _, api := range routers {
		for _, route := range api.Routes() {
			var handler http.Handler
			handler = route.HandlerFunc
			handler = Logger(handler, route.Name)

			router.
				Methods(route.Method, "OPTIONS").
				Path(route.Pattern).
				Name(route.Name).
				Handler(handler)
		}
	}
	return router
}
```
