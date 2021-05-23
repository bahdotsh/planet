package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/app/planet/x/blog/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

func CmdCreateSentPost() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-sentPost [postID] [title] [chain]",
		Short: "Creates a new sentPost",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsPostID := string(args[0])
			argsTitle := string(args[1])
			argsChain := string(args[2])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateSentPost(clientCtx.GetFromAddress().String(), string(argsPostID), string(argsTitle), string(argsChain))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateSentPost() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-sentPost [id] [postID] [title] [chain]",
		Short: "Update a sentPost",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsPostID := string(args[1])
			argsTitle := string(args[2])
			argsChain := string(args[3])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateSentPost(clientCtx.GetFromAddress().String(), id, string(argsPostID), string(argsTitle), string(argsChain))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteSentPost() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-sentPost [id] [postID] [title] [chain]",
		Short: "Delete a sentPost by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteSentPost(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
