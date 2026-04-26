{
  description = "Development environment for katsumi-portfolio";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs =
    { nixpkgs, ... }:
    let
      supportedSystems = [
        "aarch64-darwin"
        "aarch64-linux"
        "x86_64-darwin"
        "x86_64-linux"
      ];

      forAllSystems =
        function:
        nixpkgs.lib.genAttrs supportedSystems (
          system:
          function {
            pkgs = import nixpkgs { inherit system; };
          }
        );
    in
    {
      devShells = forAllSystems (
        { pkgs }:
        {
          default = pkgs.mkShell {
            packages = [
              pkgs.biome
              pkgs.nodejs_20
              pkgs.pnpm_10
              pkgs.git
            ];

            shellHook = ''
              export PNPM_HOME="$PWD/.pnpm-home"
              export PATH="$PNPM_HOME:$PATH"
              export npm_config_store_dir="$PWD/.pnpm-store"

              echo "Node $(node --version)"
              echo "pnpm $(pnpm --version)"
              echo "Biome $(biome --version)"
            '';
          };
        }
      );
    };
}
