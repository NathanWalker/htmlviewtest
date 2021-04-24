import { Observable } from "@nativescript/core";

export class HelloWorldModel extends Observable {
  regDirectionsMT = `Your VBA Gateway Registration Code is your DOB (MMDDYYYY) and the last 4 of SSN (numbers only, no spaces or dashes). Example: If your birthday is 1/2/1980, and the last 4 of SSN are 6789, your Registration Code would be 010219806789`;
  private _counter: number;
  private _message: string;

  constructor() {
    super();

    // Initialize default values.
    this._counter = 42;
    this.updateMessage();
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    if (this._message !== value) {
      this._message = value;
      this.notifyPropertyChange("message", value);
    }
  }

  onTap() {
    this._counter--;
    this.updateMessage();
  }

  private updateMessage() {
    if (this._counter <= 0) {
      this.message =
        "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
      this.message = `${this._counter} taps left`;
    }
  }
}
