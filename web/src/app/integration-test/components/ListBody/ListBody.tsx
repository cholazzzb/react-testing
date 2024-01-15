import { Name } from '../../entity';
import { getListName } from '../../service';

type ListBodyProps = {
  data: Awaited<ReturnType<typeof getListName>>['data'];
  selectedData: Set<Name>;
  onToggleSelect: (value: Name) => void;
};
export function ListBody(props: ListBodyProps) {
  return (
    <div className='flex-column border-amber-400 border-sm border-2 rounded-lg p-4'>
      {props.data.map((dt, index) => {
        const value = props.selectedData.has(dt.name);
        const onToggle = () => props.onToggleSelect(dt.name);
        return (
          <div key={`${index}-${dt}`} className='flex justify-between mb-4'>
            <p>{dt.name}</p>
            <SelectedButton isSelected={value} onToggle={onToggle} />
          </div>
        );
      })}
    </div>
  );
}

type SelectedButtonProps = {
  isSelected: boolean;
  onToggle: () => void;
};
function SelectedButton(props: SelectedButtonProps) {
  const text = props.isSelected ? 'Selected' : 'Not Selected';
  const bgColor = props.isSelected ? 'bg-green-700 ' : 'bg-purple-700 ';

  return (
    <button onClick={props.onToggle} className={`border-2 px-8 rounded-md ${bgColor}`}>
      {text}
    </button>
  );
}
