# Go (Server) SDKs

There is an SDK for each microservice's API definition:
- `novellia`
- `order_fulfillment`

These SDKs should not be used by clients.

## Regenerating SDKs (general)

There are some minor changes that need to be made after regenerating the SDK.

- In `v0/routers.go`
	- Add the `"mime/multipart"` import to 
	- Replace `NewRouter` to use CORS middleware in `routers.go`
	- Remove import `"github.com/gorilla/handlers"`
- Remove `"github.com/gorilla/mux"` import from `v0/api_default.go`

```
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

### Regenerating Novellia

- Edit `v0/model_product_product.go` to use pointer types for
  -	`Extended721Token`
  - `NovelliaStandardToken`
  - `NativeToken`
  - `NovelliaProduct`
  - Otherwise JSON responses will return annoying empty objects. (`omitempty` won't work)
- Edit `v0/model_token.go` to use `uint64` for the token quantity field `Amount` (`int32` will overflow)
	- Amount uint64 `json:"amount"`

- Edit `model_extended721_file.go` to comment out bad generated code (that's not used in Go)
```
// either a single file URL or an array of file URLs
// code generated is invalid, not used anyway outside of TS
//Src OneOfstringarray `json:"src,omitempty"`
```
