type PrimaryButtonProps = { actionType?: string };

const PrimaryButton = (props: PrimaryButtonProps) => {
  const { actionType = "Add" } = props;
  return (
    <div>
      <button>Click to {actionType}</button>
    </div>
  );
};

export default PrimaryButton;
