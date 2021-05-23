package rest

import (
	"github.com/gorilla/mux"

	"github.com/cosmos/cosmos-sdk/client"
	// this line is used by starport scaffolding # 1
)

const (
	MethodGet = "GET"
)

// RegisterRoutes registers blog-related REST handlers to a router
func RegisterRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 2
	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

}

func registerQueryRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 3
	r.HandleFunc("/blog/timedoutPosts/{id}", getTimedoutPostHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/blog/timedoutPosts", listTimedoutPostHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/blog/sentPosts/{id}", getSentPostHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/blog/sentPosts", listSentPostHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/blog/posts/{id}", getPostHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/blog/posts", listPostHandler(clientCtx)).Methods("GET")

}

func registerTxHandlers(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 4
	r.HandleFunc("/blog/timedoutPosts", createTimedoutPostHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/blog/timedoutPosts/{id}", updateTimedoutPostHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/blog/timedoutPosts/{id}", deleteTimedoutPostHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/blog/sentPosts", createSentPostHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/blog/sentPosts/{id}", updateSentPostHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/blog/sentPosts/{id}", deleteSentPostHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/blog/posts", createPostHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/blog/posts/{id}", updatePostHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/blog/posts/{id}", deletePostHandler(clientCtx)).Methods("POST")

}
